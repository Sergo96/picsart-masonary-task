import { Photo } from '../../types/masonaryPhoto.types.ts';

export type PexelsApiResponse = {
  total_results: number;
  page: number;
  per_page: number;
  photos: Photo[];
  next_page?: string;
};
