import React from 'react';
import { Layout, Menu, Dropdown, Button } from 'antd';
import s from '@/common/layout/style.styl';

const { Header } = Layout;

const menu = (
  <Menu>
    <Menu.Item key="1">
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item key="2">
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item key="3">
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);

const ContentHeader: React.FC = () => {
  return (
    <Header className={s.header}>
      <Dropdown overlay={menu} placement="bottomLeft">
        <Button type="text" size="large" className={s.headerNav}>
          lang님
        </Button>
      </Dropdown>
    </Header>
  );
};

export default ContentHeader;
