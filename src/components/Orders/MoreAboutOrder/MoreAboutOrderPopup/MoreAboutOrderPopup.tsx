import React from 'react';
import { BasePopup } from '../../../Base';
import styles from './MoreAboutOrderPopup.module.scss';

export const MoreAboutOrderPopup: React.FC<{
  isShow: boolean;
  close: () => void;
  orderId: string;
}> = ({ orderId, isShow, close }) => {
  return (
    <BasePopup close={close} isOpen={isShow}>
      <div className={styles.container}>{orderId}</div>
    </BasePopup>
  );
};
