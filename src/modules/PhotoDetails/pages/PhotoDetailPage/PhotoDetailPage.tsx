import { useParams } from 'react-router-dom';
import { usePhotoById } from '../../hooks';
import { LoadingState } from '../../../../common/components';
import { PhotoDetailView } from '../../components';
import { Photo } from '../../../../common/types';

export const PhotoDetailPage = () => {
  const { id } = useParams();
  const { data, isFetching } = usePhotoById(id ?? '');
  if (isFetching) return <LoadingState />;
  return <PhotoDetailView {...(data as Photo)} />;
};
