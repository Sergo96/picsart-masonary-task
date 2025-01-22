import { useParams } from 'react-router-dom';
import { usePhotoById } from '../../hooks';
import { LoadingState } from '../../../../components';
import { PhotoDetailView } from '../../components';

export const PhotoDetailPage = () => {
  const { id } = useParams();
  const { data, isFetching } = usePhotoById(id);
  if (isFetching) return <LoadingState />;
  return <PhotoDetailView {...data} />;
};
