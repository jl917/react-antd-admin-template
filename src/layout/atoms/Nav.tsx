import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import routes from '@/router/routes';

const Nav = () => {
  return (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
      {routes.map(({ title, path }: IRouter) => (
        <Menu.Item key={title}>
          <Link to={path}>{title}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default Nav;
