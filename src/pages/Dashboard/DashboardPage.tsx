import React, { useEffect } from 'react';
import { MainDashboardHeader } from '../../components';
import { Outlet, useNavigate } from 'react-router-dom';
import { useCurrentPath } from '../../hooks';
import { paths } from '../../service/router/paths';

export const DashboardPage = () => {
  const currentPath = useCurrentPath();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentPath === paths.dashboard) {
      navigate(paths.dashboardPrice);
    }
  }, [currentPath]);

  return (
    <div>
      <MainDashboardHeader />
      <Outlet />
    </div>
  );
};
