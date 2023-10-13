import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useCurrentPath, useShouldLoadRoute } from '../../hooks';
import { route } from '../../service/router/route';

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
      navigate(route.dashboard);
    } else if (isUserLogged.isNoSessionMoreThan2Seconds) {
      navigate(route.auth);
    }
  }, [navigate, path, isUserLogged]);

  return (
    <>
      <Outlet />
    </>
  );
};
