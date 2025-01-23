import { Photo } from '../../../../common/types';
import { fetchPhotoById } from '../../api/fetchPhotoById';
import { useQuery } from '@tanstack/react-query';

export const usePhotoById = (id: string) => {
  return useQuery<Photo, Error>({
    queryKey: ['photo', id],
    queryFn: () => fetchPhotoById(id),
    enabled: !!id,
  });
};
