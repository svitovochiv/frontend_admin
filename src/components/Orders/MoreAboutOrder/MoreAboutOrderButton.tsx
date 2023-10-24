import React from 'react';
import { ButtonSubmit } from '../../Base';
import { MoreAboutOrderPopup } from './MoreAboutOrderPopup/MoreAboutOrderPopup';
import { useToggle } from '../../../hooks';

export const MoreAboutOrderButton: React.FC<{
  orderId: string;
}> = ({ orderId }) => {
  const popup = useToggle();
  return (
    <>
      <MoreAboutOrderPopup
        isShow={popup.isShow}
        close={popup.close}
        orderId={orderId}
      />
      <ButtonSubmit onClick={popup.open}>Відкрити</ButtonSubmit>
    </>
  );
};
