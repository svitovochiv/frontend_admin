import React from 'react';
import styles from './MainDashboardHeader.module.scss';
import { NavButton } from '../../Base';

const navButtons = [
  {
    name: 'прайс',
  },
];

export const MainDashboardHeader = () => {
  return (
    <div className={styles.container}>
      {navButtons.map((button) => {
        return <NavButton name={button.name} />;
      })}
    </div>
  );
};
