import { Route, Routes } from 'react-router-dom';
import { MasonryLayout } from '../../common/layout';
import { PhotoDetailPage } from './pages';
import { mainRoutes } from '../../common/constants';
import { JSX } from 'react';

const PhotoDetails: () => JSX.Element = () => {
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
