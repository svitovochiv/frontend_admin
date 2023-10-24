import React from 'react';
import styles from './OrdersDashboardPage.module.scss';
import { OrdersTable } from '../../../components';

export const OrdersDashboardPage = () => {
  return (
    <div className={styles.container}>
      <OrdersTable />
    </div>
  );
};
