import { Route, Routes } from 'react-router-dom';
import { MasonryLayout } from '../../common/layout';
import { PhotoDetailPage } from './pages';
import { mainRoutes } from '../../common/constants';

const PhotoDetails = () => {
  return (
    <Routes>
      <Route
        path={mainRoutes.main}
        element={
          <MasonryLayout headerType='info'>
            <PhotoDetailPage />
          </MasonryLayout>
        }
      />
    </Routes>
  );
};

export default PhotoDetails;
