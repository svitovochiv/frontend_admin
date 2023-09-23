import React, { DetailedHTMLProps } from 'react';
import styles from './MButton.module.scss';

export const MButton: React.FC<
  DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
> = ({ className, ...props }) => {
  const joinedClassName = `${styles.mbutton} ${className}`;
  return <button className={joinedClassName} {...props} />;
};
