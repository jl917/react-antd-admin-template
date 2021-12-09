import React from 'react';
import { Switch as Routes, BrowserRouter, Route } from 'react-router-dom';
import Loader from './Loader';

const routes = window.VAR_ROUTES;

console.log(routes)

const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      {routes.map((path: string) => {
        console.log(path)
        const props = {
          path: [path, ...(path === 'dashboard' ? [''] : [])],
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
