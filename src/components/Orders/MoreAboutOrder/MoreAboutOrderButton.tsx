import React from 'react';
import { useNavigate } from 'react-router-dom';
import { route } from '../../../service/router/route';
import { MButton } from '../../Base';

export const MoreAboutOrderButton: React.FC<{
  orderId: string;
}> = ({ orderId }) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(route.openOrder({ orderId }));
  };
  return (
    <MButton variant="submit" onClick={onClick}>
      Відкрити
    </MButton>
  );
};
