import axios from 'axios';

const BASE_URL = 'https://api.unsplash.com/search/photos';
const ACCESS_KEY = 'ваш_access_key'; // Укажите здесь ваш ключ доступа

export const fetchImages = async (query, page = 1, perPage = 12) => {
  const response = await axios.get(BASE_URL, {
    params: {
      query,
      page,
      per_page: perPage,
      client_id: ACCESS_KEY,
    },
  });
  return response.data;
};