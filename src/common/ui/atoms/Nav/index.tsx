import React from 'react';
import { Link } from 'react-router-dom';
import routes from './routes';

const Nav = () => {
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
