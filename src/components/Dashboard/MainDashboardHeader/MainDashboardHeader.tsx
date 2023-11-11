import React from 'react';
import styles from './MainDashboardHeader.module.scss';
import { NavButton } from '../../Base';
import { route } from '../../../service/router/route';
import { useCurrentPath } from '../../../hooks';
import { Box } from '@mui/material';
import { HeaderUserInfo } from '../HeaderUserInfo/HeaderUserInfo';

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
      <Box>
        {navButtons.map((button) => {
          const isActive = currentPath?.includes(button.link);
          return (
            <NavButton
              name={button.name}
              link={button.link}
              isActive={isActive}
              key={button.link}
            />
          );
        })}
      </Box>
      <Box>
        <HeaderUserInfo />
      </Box>
    </div>
  );
};
