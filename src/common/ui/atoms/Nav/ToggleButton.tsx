import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { atomShowNav, selectorShowNav } from '@/common/store/layout';
import s from './style.module.styl';

const NavBtn = () => {
  const [isShow, setIsShow] = useRecoilState(atomShowNav);
  const toggleNav = () => setIsShow(!isShow);
  const showNav = useRecoilValue(selectorShowNav);
  return (
    <div className={s['toggle-btn']}>
      <button onClick={toggleNav} type="button">
        toggle
      </button>
      <span style={{ color: 'white' }}>{showNav}</span>
    </div>
  );
};

export default NavBtn;
