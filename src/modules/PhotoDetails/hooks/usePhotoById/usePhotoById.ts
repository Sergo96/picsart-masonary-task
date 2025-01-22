import { Photo } from '../../../../types';
import { fetchPhotoById } from '../../api/fetchPhotoById.ts';
import { useQuery } from '@tanstack/react-query';

export const usePhotoById = (id: string) => {
  return useQuery<Photo, Error>({
    queryKey: ['photo', id],
    queryFn: () => fetchPhotoById(id),
    enabled: !!id,
  });
};
