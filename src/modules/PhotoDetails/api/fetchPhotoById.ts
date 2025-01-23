import axios from 'axios';
import { Photo } from '../../../common/types';
import { env } from '../../../common/config/env';

export const fetchPhotoById = async (id: string): Promise<Photo> => {
  const response = await axios.get(`${env.BASE_URL}/photos/${id}`, {
    headers: { Authorization: env.PHOTOS_API_KEY },
  });
  return response.data;
};
