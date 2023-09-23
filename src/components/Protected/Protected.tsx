import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useCurrentPath, useShouldLoadRoute } from '../../hooks';
import { paths } from '../../service/router/paths';

export const Protected: React.FC = () => {
  const isUserLogged = useShouldLoadRoute();
  const navigate = useNavigate();
  const path = useCurrentPath();

  useEffect(() => {
    if (
      path === '/' &&
      !isUserLogged.isLoading &&
      !isUserLogged.hasInvalidClaims
    ) {
      navigate(paths.dashboard);
    } else if (isUserLogged.isNoSessionMoreThan2Seconds) {
      navigate(paths.auth);
    }
  }, [navigate, path, isUserLogged]);

  return (
    <>
      <Outlet />
    </>
  );
};
