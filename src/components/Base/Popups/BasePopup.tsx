import React from 'react';
import { Dialog } from '@headlessui/react';
import styles from './BasePopup.module.scss';

export const BasePopup: React.FC<{
  isOpen: boolean;
  close: () => void;
  children: React.ReactNode;
}> = ({ isOpen, close, children }) => {
  return (
    <Dialog open={isOpen} onClose={close} className={styles.container}>
      <Dialog.Panel>{children}</Dialog.Panel>
    </Dialog>
  );
};
