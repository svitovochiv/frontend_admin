import React from 'react';

export interface TableCellProps {
  style?: React.CSSProperties;
  className?: string;
}

export const createCellContext = (fn?: TableCellProps | undefined) => {
  if (fn) {
    return fn;
  }
};
