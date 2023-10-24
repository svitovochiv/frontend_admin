'use client';
import { useEffect, useState } from 'react';

export const useToggle = (props?: { initialState?: boolean }) => {
  const [isShow, setIsShow] = useState(props?.initialState || false);

  const close = () => {
    console.log('close');
    setIsShow(false);
  };
  const open = () => {
    console.log('open');
    setIsShow(true);
  };
  const toggle = () => {
    setIsShow((prevState) => !prevState);
  };
  useEffect(() => {
    console.log('isShow', isShow);
  }, [isShow]);
  return {
    isShow: isShow,
    close,
    open,
    toggle,
  };
};
