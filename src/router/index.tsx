import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Loader from './Loader';
import routes from './routes';

const Router: React.FC = () => (
  <BrowserRouter>
    <Switch>
      {routes.map(({ path }: IRouter) => {
        const props = {
          path: [path],
          key: path,
          component: Loader(path),
          exact: true,
        };
        if (path === '/dashboard') {
          props.path.push('/');
        }
        return <Route {...props} />;
      })}
    </Switch>
  </BrowserRouter>
);

export default Router;
