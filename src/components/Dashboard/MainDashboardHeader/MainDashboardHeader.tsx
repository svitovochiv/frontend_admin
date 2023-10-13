import React from 'react';
import styles from './MainDashboardHeader.module.scss';
import { NavButton } from '../../Base';
import { route } from '../../../service/router/route';
import { useCurrentPath } from '../../../hooks';

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
  const currentPath = useCurrentPath();

  return (
    <div className={styles.container}>
      {navButtons.map((button) => {
        const isActive = currentPath === button.link;
        return (
          <NavButton
            name={button.name}
            link={button.link}
            isActive={isActive}
            key={button.link}
          />
        );
      })}
    </div>
  );
};
