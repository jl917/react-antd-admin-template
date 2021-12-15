import React from 'react';
import { Button } from 'antd';
import { useRecoilState, useRecoilValue } from 'recoil';
import { MenuOutlined } from '@ant-design/icons';
import { atomShowNav, selectorShowNav } from '@/common/store/layout';
import s from './style.module.styl';

const NavBtn = () => {
  const [isShow, setIsShow] = useRecoilState(atomShowNav);
  const toggleNav = () => setIsShow(!isShow);
  const showNav = useRecoilValue(selectorShowNav);
  return (
    <div className={s['toggle-btn']}>
      <Button icon={<MenuOutlined />} onClick={toggleNav} />
      <span style={{ color: 'white' }}>{showNav}</span>
    </div>
  );
};

export default NavBtn;
