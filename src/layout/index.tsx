import React, { useMemo } from 'react';
import { Layout } from 'antd';
import { useRecoilValue } from 'recoil';
import Nav from './atoms/Nav';
import GlobalHeader from './molecules/GlobalHeader';
import GlobalFooter from './molecules/GlobalFooter';
import { navIsShow } from '@/common/store/layout';
import s from '@/layout/style.styl';

const { Content, Sider } = Layout;

const Component: React.FC = ({ children }) => {
  const isShow = useRecoilValue(navIsShow);
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
        <GlobalHeader />
        <Content className={s.content}>
          <div className={s.contentLayout}>{children}</div>
        </Content>
        <GlobalFooter />
      </Layout>
    </Layout>
  );
};

export default Component;
