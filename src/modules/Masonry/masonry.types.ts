import { Photo } from '../../common/types';

export type PexelsApiResponse = {
  total_results: number;
  page: number;
  per_page: number;
  photos: Photo[];
  next_page?: string;
};
