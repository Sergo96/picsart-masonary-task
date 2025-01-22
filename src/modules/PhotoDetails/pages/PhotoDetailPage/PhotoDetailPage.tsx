import { useParams } from 'react-router-dom';

export const PhotoDetailPage = () => {
  const { id } = useParams();
  return <>params {id}</>;
};
