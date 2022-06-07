import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import { MainPage } from 'src/pages';
import { ROUTES } from 'src/shared/constants';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.root} element={<MainPage />} />
        <Route path="*" element={<Navigate to={ROUTES.root} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
