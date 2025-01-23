import { useInfiniteQuery } from '@tanstack/react-query';
import { PexelsApiResponse } from '../../masonry.types';
import { fetchPhotos } from '../../api/fetchPhotos';

export const useGetPhotosQuery = (queryParams?: { [key: string]: string | number }) => {
  return useInfiniteQuery<PexelsApiResponse, Error>({
    queryKey: ['photos', Object.values(queryParams ?? '')],
    queryFn: () => {
      return fetchPhotos({ ...queryParams });
    },
    getNextPageParam: (lastPage: PexelsApiResponse) => +lastPage.page + 1 || undefined, // Type the lastPage explicitly
    initialPageParam: 0,
  });
};
