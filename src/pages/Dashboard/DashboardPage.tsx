import React, { useEffect } from 'react';
import { MainDashboardHeader } from '../../components';
import { Outlet, useNavigate } from 'react-router-dom';
import { useCurrentPath } from '../../hooks';
import { route } from '../../service/router/route';

export const DashboardPage = () => {
  const currentPath = useCurrentPath();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentPath === route.dashboard) {
      navigate(route.dashboardPrice);
    }
  }, [currentPath]);

  return (
    <div>
      <MainDashboardHeader />
      <Outlet />
    </div>
  );
};
