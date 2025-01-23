import { JSX } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MasonryGrid } from './pages';
import { MasonryLayout } from '../../common/layout';
import { mainRoutes } from '../../common/constants';

const Masonry: () => JSX.Element = () => {
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
