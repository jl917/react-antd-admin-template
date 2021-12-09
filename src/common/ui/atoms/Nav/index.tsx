import React from 'react';
import { Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import routes from './routes';

const Nav = () => {
  const location = useLocation();
  const current: IRouter | undefined = routes.find((e) => e.path === location.pathname);
  return (
    <Menu theme="dark" mode="inline" selectedKeys={[current?.title || '']}>
      {routes.map(({ title, path }: IRouter) => (
        <Menu.Item key={title}>
          <Link to={path}>{title}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default Nav;
