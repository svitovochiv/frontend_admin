import React from 'react';
import { ProductsTable } from '../../../components';
import styles from './PriceDashboardPage.module.scss';

export const PriceDashboardPage = () => {
  return (
    <div className={styles.container}>
      {/*PricePage*/}
      {/*<UploadProductsForm />*/}
      <ProductsTable />
    </div>
  );
};
