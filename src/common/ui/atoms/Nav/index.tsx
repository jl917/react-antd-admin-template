import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import routes from './routes';

const Nav = () => {
  const location = useLocation();
  const current: IRouter | undefined = routes.find((e) => e.path === location.pathname);
  return (
    <ul>
      {routes.map(({ title, path }: IRouter) => (
        <li key={title}>
          <Link to={path}>{title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Nav;
