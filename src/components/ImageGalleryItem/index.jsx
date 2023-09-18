import { Item, Image } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ imageInfo, handleImgClick }) => {
  const { webformatURL, largeImageURL, tags } = imageInfo;
  return (
    <Item>
      <Image
        onClick={() => handleImgClick({ tags, largeImageURL })}
        src={webformatURL}
        alt={tags}
      />
    </Item>
  );
};

export default ImageGalleryItem;
