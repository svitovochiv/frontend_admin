import React, { DetailedHTMLProps } from 'react';
import styles from './MButton.module.scss';

type ButtonType = 'common' | 'submit';

interface IButtonProps
  extends DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
  variant?: ButtonType;
}

export const MButton: React.FC<IButtonProps> = ({
  className,
  variant = 'common',
  children,
  ...props
}) => {
  if (variant === 'submit') {
    const joinedClassName = `${styles.submitButton} ${className}`;
    return (
      <button className={joinedClassName} {...props}>
        {children}
      </button>
    );
  }
  const joinedClassName = `${styles.mbutton} ${className}`;
  return (
    <button className={joinedClassName} {...props}>
      {children}
    </button>
  );
};
