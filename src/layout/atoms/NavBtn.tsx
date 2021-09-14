import React from 'react';
import { Button } from 'antd';
import { useRecoilState } from 'recoil';
import { MenuOutlined } from '@ant-design/icons';
import { navIsShow } from '@/common/store/layout';
import s from '@/layout/style.styl';

const NavBtn = () => {
  const [isShow, setIsShow] = useRecoilState(navIsShow);
  const toggleNav = () => setIsShow(!isShow);
  return (
    <div className={s.navBtn}>
      <Button icon={<MenuOutlined />} onClick={toggleNav} />
    </div>
  );
};

export default NavBtn;
