import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { LoadingState } from './common/components';
import { mainRoutes } from './common/constants';

const Masonry = lazy(() => import('./modules/Masonry'));
const PhotoDetails = lazy(() => import('./modules/PhotoDetails'));
function App() {
  return (
    <Suspense fallback={<LoadingState />}>
      <Router>
        <Routes>
          <Route path={mainRoutes.root} element={<Masonry />} />
          <Route path={mainRoutes.photoDetailPage} element={<PhotoDetails />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
