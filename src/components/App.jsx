import { Component } from 'react';

import { getImagesBySearch } from '../api/images';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Loader from './Loader';
import Modal from './Modal';

class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    isModalOpen: false,
    imageModal: {},
    error: '',
    isLoading: false,
  };

  page = 1;
  totalHits = 1;

  componentDidUpdate(_, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  toogleModal = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  };

  fetchImages = async () => {
    try {
      this.setState({ isLoading: true, images: [] });
      this.page = 1;
      const data = await getImagesBySearch(this.state.searchQuery, this.page);
      const dataForState = data.hits.map(hit => {
        const newImageObject = {
          id: hit.id,
          webformatURL: hit.webformatURL,
          largeImageURL: hit.largeImageURL,
          tags: hit.tags,
        };
        return newImageObject;
      });
      this.setState({ images: dataForState });
      this.totalHits = data.totalHits;
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  fetchMoreImages = async () => {
    try {
      this.setState({ isLoading: true });
      this.page += 1;
      const moreData = await getImagesBySearch(
        this.state.searchQuery,
        this.page
      );
      const moreDataForState = moreData.hits.map(hit => {
        const newImageObject = {
          id: hit.id,
          webformatURL: hit.webformatURL,
          largeImageURL: hit.largeImageURL,
          tags: hit.tags,
        };
        return newImageObject;
      });
      this.setState(prevState => ({
        images: [...prevState.images, ...moreDataForState],
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ searchQuery: event.target.elements.name.value.trim() });
  };

  handleImgClick = id => {
    const imageObj = this.state.images.find(image => image.id === id);
    this.setState({
      imageModal: imageObj,
    });
    this.toogleModal();
  };

  render() {
    const { error, isLoading, images, isModalOpen, imageModal } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery
          images={this.state.images}
          handleImgClick={this.handleImgClick}
        />
        {this.totalHits === 0 && (
          <p>There are no images matching your request.</p>
        )}
        {error && <p>{this.state.error}</p>}
        {isLoading && <Loader />}
        {images.length > 0 && this.page * 12 < this.totalHits && (
          <Button handleLoadMore={this.fetchMoreImages} />
        )}
        {isModalOpen && (
          <Modal image={imageModal} toogleModal={this.toogleModal} />
        )}
      </>
    );
  }
}

export default App;
