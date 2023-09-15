import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const key = '38632532-d42edb29bc13300dd772b2b48';

export const getImagesBySearch = async (searchQuery, page) => {
  const response = await axios.get(
    `?q=${searchQuery}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data;
};
