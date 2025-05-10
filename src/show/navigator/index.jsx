import { Navigate, Route, Routes } from 'react-router-dom';

import Paths from 'Routes/paths';
import { publicRoutes } from 'Routes';

const renderRoute = (route, idx) => {
  return <Route key={idx} path={route.path} element={<route.component />} />;
};

const Navigator = () => {
  return (
    <Routes>
      {publicRoutes.map(renderRoute)}

      <Route path='*' element={<Navigate to={Paths.public.DEFAULT_PATH} />} />
    </Routes>
  );
};

export default Navigator;
