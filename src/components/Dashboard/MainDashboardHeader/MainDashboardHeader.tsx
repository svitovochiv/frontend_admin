import React from 'react';
import styles from './MainDashboardHeader.module.scss';
import { NavButton } from '../../Base';
import { route } from '../../../service/router/route';

const navButtons = [
  {
    name: 'прайс',
    link: route.dashboardPrice,
  },
  {
    name: 'замовлення',
    link: route.dashboardOrders,
  },
];

export const MainDashboardHeader = () => {
  return (
    <div className={styles.container}>
      {navButtons.map((button) => {
        return (
          <NavButton name={button.name} link={button.link} key={button.link} />
        );
      })}
    </div>
  );
};
