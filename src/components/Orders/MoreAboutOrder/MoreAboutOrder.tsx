import React from 'react';
import { ButtonSubmit } from '../../Base';

export const MoreAboutOrder: React.FC<{
  orderId: string;
}> = ({ orderId }) => {
  return <ButtonSubmit>Відкрити</ButtonSubmit>;
};
