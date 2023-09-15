import { Item, Image } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ imageInfo, handleImgClick }) => {
  return (
    <Item>
      <Image
        onClick={() => handleImgClick(imageInfo.id)}
        src={imageInfo.webformatURL}
        alt={imageInfo.tags}
      />
    </Item>
  );
};

export default ImageGalleryItem;
