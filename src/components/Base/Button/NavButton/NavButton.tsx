import React from 'react';
import styles from './NavButton.module.scss';

export const NavButton: React.FC<{
  name?: string;
  onClick?: () => void;
}> = ({ name, onClick }) => {
  return (
    <button onClick={onClick} className={styles.container}>
      {name}
    </button>
  );
};
