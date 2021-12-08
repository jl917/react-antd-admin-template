import React from 'react';
import { Layout, Button } from 'antd';
import s from './style.module.styl';

const Footer = () => (
  <Layout.Footer className={s.footer}>
    <Button type="link" href="#">
      send mail to master
    </Button>
  </Layout.Footer>
);

export default Footer;
