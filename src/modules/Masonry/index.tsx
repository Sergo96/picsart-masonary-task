import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MasonryGrid } from './pages';
import { MasonryLayout } from '../../layout';
import { mainRoutes } from '../../constants';

const Masonry: FC = () => {
  return (
    <Routes>
      <Route
        path={mainRoutes.main}
        element={
          <MasonryLayout headerType='search'>
            <MasonryGrid />
          </MasonryLayout>
        }
      />
    </Routes>
  );
};

export default Masonry;
