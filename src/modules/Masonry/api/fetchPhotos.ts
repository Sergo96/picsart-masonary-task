import axios from 'axios';
import { env } from '../../../config/env.ts';

export const fetchPhotos = async ({ pageParam = 1, perPage = 50, query = 'nature' }) => {
  const response = await axios.get(`${env.BASE_URL}/v1/search`, {
    headers: { Authorization: env.PHOTOS_API_KEY },
    params: { page: pageParam, per_page: perPage, query },
  });
  return response.data;
};
