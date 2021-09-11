import React from 'react';
import { Menu } from 'antd';

const Nav = () => {
  return (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
      <Menu.Item key="1">dashboard</Menu.Item>
      <Menu.Item key="2">form</Menu.Item>
      <Menu.Item key="3">search(list)</Menu.Item>
      <Menu.Item key="4">detail</Menu.Item>
      <Menu.Item key="5">sussess</Menu.Item>
      <Menu.Item key="6">fail</Menu.Item>
      <Menu.Item key="7">404</Menu.Item>
      <Menu.Item key="8">mypage</Menu.Item>
      <Menu.Item key="9">editor</Menu.Item>
    </Menu>
  );
};

export default Nav;
