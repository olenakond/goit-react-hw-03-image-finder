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
    imageModal: null,
    error: '',
    isLoading: false,
    page: 1,
    totalHits: 0,
  };

  componentDidUpdate(_, prevState) {
    const { searchQuery, page } = this.state;
    if (prevState.searchQuery !== searchQuery || prevState.page !== page) {
      this.fetchImages();
    }
  }

  fetchImages = async () => {
    const { searchQuery, page } = this.state;
    try {
      this.setState({ isLoading: true });

      const data = await getImagesBySearch(searchQuery, page);

      if (data.totalHits === 0) {
        alert('There are no images matching your request.');
        return;
      }

      const dataForState = data.hits.map(
        ({ id, webformatURL, largeImageURL, tags }) => {
          return { id, webformatURL, largeImageURL, tags };
        }
      );

      this.setState(prevState => ({
        images: [...prevState.images, ...dataForState],
        totalHits: data.totalHits,
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  fetchMoreImages = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      searchQuery: event.target.elements.name.value.trim(),
      page: 1,
      images: [],
      totalHits: 0,
    });
  };

  toogleModal = (imageModal = null) => {
    this.setState({ imageModal });
  };

  render() {
    const { error, isLoading, images, imageModal, totalHits } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery
          images={this.state.images}
          handleImgClick={this.toogleModal}
        />
        {error && <p>{this.state.error}</p>}
        {isLoading && <Loader />}
        {images.length !== totalHits && !isLoading && (
          <Button handleLoadMore={this.fetchMoreImages} />
        )}
        {imageModal && (
          <Modal image={imageModal} toogleModal={this.toogleModal} />
        )}
      </>
    );
  }
}

export default App;
