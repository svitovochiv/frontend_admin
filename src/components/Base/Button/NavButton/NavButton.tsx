import React from 'react';
import styles from './NavButton.module.scss';
import { Link } from 'react-router-dom';

export const NavButton: React.FC<{
  name: string;
  link: string;
}> = ({ name, link }) => {
  return (
    <Link to={link}>
      <button className={styles.container}>{name}</button>
    </Link>
  );
};
