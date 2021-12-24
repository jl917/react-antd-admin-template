import React from 'react';
import { Layout, Menu, Dropdown, Button } from 'antd';
import ToggleButton from '@/common/ui/atoms/Nav/ToggleButton';
import s from './style.module.styl';

const { Header } = Layout;

const menu = (
  <Menu>
    <Menu.Item key="1">Logout</Menu.Item>
  </Menu>
);

const ContentHeader: React.FC = () => {
  return (
    <Header className={s.header}>
      <ToggleButton />
      <Dropdown overlay={menu} placement="bottomLeft">
        <Button type="text" size="large" className={s['header-nav']}>
          lang~
        </Button>
      </Dropdown>
    </Header>
  );
};

export default ContentHeader;
