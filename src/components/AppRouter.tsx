import { Route, Routes, Navigate } from 'react-router-dom';

import { privateRoutes, publicRoutes, RouteNames } from '../router';

const AppRouter = () => {
  const auth = false;
  return auth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route path={route.path} element={<route.element />} key={route.path} />
      ))}

      <Route path='*' element={<Navigate to={RouteNames.EVENT} />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route path={route.path} element={<route.element />} key={route.path} />
      ))}
      <Route path='*' element={<Navigate to={RouteNames.LOGIN} />} />
    </Routes>
  );
};

export default AppRouter;
