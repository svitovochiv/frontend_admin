import React from 'react';
import { ButtonSubmit } from '../../Base';
import { useNavigate } from 'react-router-dom';
import { route } from '../../../service/router/route';

export const MoreAboutOrderButton: React.FC<{
  orderId: string;
}> = ({ orderId }) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(route.openOrder({ orderId }));
  };
  return (
    <>
      <ButtonSubmit onClick={onClick}>Відкрити</ButtonSubmit>
    </>
  );
};
