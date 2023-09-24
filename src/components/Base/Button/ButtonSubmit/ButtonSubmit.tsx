import React, { DetailedHTMLProps } from 'react';
import styles from './ButtonSubmit.module.scss';

export const ButtonSubmit: React.FC<
  DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
> = ({ className, ...props }) => {
  const joinedClassName = `${styles.container} ${className}`;
  return <button className={joinedClassName} {...props} />;
};
