import React from 'react';
import { Layout } from 'antd';
import Nav from './atoms/Nav';
import GlobalHeader from './molecules/GlobalHeader';
import GlobalFooter from './molecules/GlobalFooter';
import s from '@/common/layout/style.styl';

const { Content, Sider } = Layout;

const Component = () => {
  return (
    <Layout className={s.root}>
      <Sider className={s.side}>
        <div className={s.logo}>Admin</div>
        <Nav />
      </Sider>
      <Layout className="site-layout">
        <GlobalHeader />
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
            content
            <br />
            content
          </div>
        </Content>
        <GlobalFooter />
      </Layout>
    </Layout>
  );
};

export default Component;
