import { useInfiniteQuery } from '@tanstack/react-query';
import { PexelsApiResponse } from '../../masonry.types.ts';
import { fetchPhotos } from '../../api/fetchPhotos.ts';

export const useGetPhotosQuery = (queryParams?: { [key: string]: string | number }) => {
  return useInfiniteQuery<PexelsApiResponse, Error>({
    queryKey: ['photos', Object.values(queryParams ?? '')],
    queryFn: ({ pageParam = 1 }) => fetchPhotos({ pageParam, ...queryParams }), // Pass queryParams to fetchPhotos
    getNextPageParam: (lastPage) => +lastPage.page + 1 || undefined,
    initialPageParam: 0,
  });
};
