import React from 'react';
import { Layout, Menu, Dropdown, Button } from 'antd';
import s from '@/layout/style.module.styl';
import NavBtn from '../atoms/NavBtn';

const { Header } = Layout;

const menu = (
  <Menu>
    <Menu.Item key="1">Logout</Menu.Item>
  </Menu>
);

const ContentHeader: React.FC = () => {
  return (
    <Header className={s.header}>
      <NavBtn />
      <Dropdown overlay={menu} placement="bottomLeft">
        <Button type="text" size="large" className={s.headerNav}>
          lang~
        </Button>
      </Dropdown>
    </Header>
  );
};

export default ContentHeader;
