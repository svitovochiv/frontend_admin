import React from 'react';
import styles from './NavButton.module.scss';
import { Link } from 'react-router-dom';

export const NavButton: React.FC<{
  name: string;
  link: string;
  isActive?: boolean;
}> = ({ name, link, isActive }) => {
  const className = isActive
    ? [styles.container, styles.active].join(' ')
    : styles.container;
  return (
    <Link to={link}>
      <button className={className}>{name}</button>
    </Link>
  );
};
