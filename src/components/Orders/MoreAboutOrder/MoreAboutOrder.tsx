import React from 'react';
import { ButtonSubmit } from '../../Base';
import { Link } from 'react-router-dom';
import { route } from '../../../service/router/route';

export const MoreAboutOrder: React.FC<{
  orderId: string;
}> = ({ orderId }) => {
  return (
    <Link to={route.dashboardOrderInfo(orderId)}>
      <ButtonSubmit>Відкрити</ButtonSubmit>
    </Link>
  );
};
