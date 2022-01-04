import React from 'react';
import ToggleButton from '@/common/ui/atoms/Nav/ToggleButton';
import s from './style.module.styl';

const ContentHeader: React.FC = () => {
  return (
    <div className={s.header}>
      <ToggleButton />
      <button className={s['header-nav']} type="button">
        lang~
      </button>
    </div>
  );
};

export default ContentHeader;
