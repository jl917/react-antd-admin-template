import React from 'react';
import { Layout, Button } from 'antd';
import s from '@/layout/style.styl';

const { Footer } = Layout;

const GlobalFooter = () => (
  <Footer className={s.footer}>
    <Button type="link" href="#">
      send mail to master
    </Button>
  </Footer>
);

export default GlobalFooter;
