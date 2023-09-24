import React from 'react';
import { ProductsTable, UploadProductsForm } from '../../../components';
import styles from './PriceDashboardPage.module.scss';

export const PriceDashboardPage = () => {
  return (
    <div className={styles.container}>
      <ProductsTable />
      <UploadProductsForm />
    </div>
  );
};
