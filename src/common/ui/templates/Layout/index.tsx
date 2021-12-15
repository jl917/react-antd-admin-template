import React, { useMemo } from 'react';
import { Layout } from 'antd';
import { useRecoilValue } from 'recoil';
import Header from '@/common/ui/molecules/Header';
import Footer from '@/common/ui/molecules/Footer';
import Nav from '@/common/ui/atoms/Nav';
import { atomShowNav } from '@/common/store/layout';
import s from './style.module.styl';

const { Content, Sider } = Layout;

const Component: React.FC = ({ children }) => {
  const isShow = useRecoilValue(atomShowNav);
  const siderStyle = useMemo(
    () => ({
      display: isShow ? 'block' : 'none',
    }),
    [isShow],
  );
  return (
    <Layout className={s.root}>
      <Sider className={s.side} style={siderStyle}>
        <div className={s.logo}>Admin</div>
        <Nav />
      </Sider>
      <Layout className="site-layout">
        <Header />
        <Content className={s.content}>
          <div className={s['content-layout']}>{children}</div>
        </Content>
        <Footer />
      </Layout>
    </Layout>
  );
};

export default Component;
