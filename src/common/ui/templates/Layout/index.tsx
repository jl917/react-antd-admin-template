import React, { useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import Header from '@/common/ui/molecules/Header';
import Footer from '@/common/ui/molecules/Footer';
import Nav from '@/common/ui/atoms/Nav';
import { atomShowNav } from '@/common/store/layout';
import s from './style.module.styl';

const Component: React.FC = ({ children }) => {
  const isShow = useRecoilValue(atomShowNav);
  const siderStyle = useMemo(
    () => ({
      display: isShow ? 'block' : 'none',
    }),
    [isShow],
  );
  return (
    <div className={s.root}>
      <div className={s.side} style={siderStyle}>
        <div className={s.logo}>Admin</div>
        <Nav />
      </div>
      <div className="site-layout">
        <Header />
        <div className={s.content}>
          <div className={s['content-layout']}>{children}</div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Component;
