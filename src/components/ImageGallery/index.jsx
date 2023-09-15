import ImageGalleryItem from '../ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

const ImageGallery = ({ images, handleImgClick }) => {
  return (
    <Gallery>
      {images.map(image => {
        return (
          <ImageGalleryItem
            key={image.id}
            imageInfo={image}
            handleImgClick={handleImgClick}
          />
        );
      })}
    </Gallery>
  );
};

export default ImageGallery;
