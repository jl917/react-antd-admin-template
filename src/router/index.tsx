import React from 'react';
import { Switch as Routes, BrowserRouter, Route } from 'react-router-dom';
import Loader from './Loader';
import routes from './routes';

console.log(window.VAR_ROUTES);

const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      {routes.map(({ path }: IRouter) => {
        const props = {
          path: [path, ...(path === '/dashboard/index' ? ['/'] : [])],
          key: path,
          component: Loader(path),
          exact: true,
        };
        return <Route {...props} />;
      })}
    </Routes>
  </BrowserRouter>
);

export default Router;
