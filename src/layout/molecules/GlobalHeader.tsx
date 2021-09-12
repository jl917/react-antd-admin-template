import React from 'react';
import { Layout, Menu, Dropdown, Button } from 'antd';
import s from '@/layout/style.styl';

const { Header } = Layout;

const menu = (
  <Menu>
    <Menu.Item key="1">menu1</Menu.Item>
    <Menu.Item key="2">menu2</Menu.Item>
  </Menu>
);

const ContentHeader: React.FC = () => {
  return (
    <Header className={s.header}>
      <Dropdown overlay={menu} placement="bottomLeft">
        <Button type="text" size="large" className={s.headerNav}>
          lang~
        </Button>
      </Dropdown>
    </Header>
  );
};

export default ContentHeader;
