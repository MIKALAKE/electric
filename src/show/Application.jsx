import { BrowserRouter } from 'react-router-dom';

import ApplicationRoot from './ApplicationRoute';

const Application = () => {
  return (
    <BrowserRouter>
      <ApplicationRoot />
    </BrowserRouter>
  );
};

export default Application;
