import React from 'react';

import { OrderDeliveryInfo } from '../../../../interfaces';
import styles from './BaseOrderInfo.module.scss';
import { paymentMap, time } from '../../../../service';

export const BaseOrderInfo: React.FC<{
  deliveryInfo: OrderDeliveryInfo;
}> = ({ deliveryInfo }) => {
  console.log('deliveryInfo: ', deliveryInfo);
  return (
    <div className={styles.container}>
      <div className={styles.title}>Інформація про замовлення</div>
      <div className={styles.grid}>
        <div className={styles.gridItem}>
          <div className={styles.label}>Отримувач</div>
          <div className={styles.value}>{deliveryInfo.recipient}</div>
        </div>
        <div className={styles.gridItem}>
          <div className={styles.label}>Номер телефону</div>
          <div className={styles.value}>{deliveryInfo.contactNumber}</div>
        </div>
        <div className={styles.gridItem}>
          <div className={styles.label}>Спосіб оплати</div>
          <div className={styles.value}>
            {paymentMap[deliveryInfo.paymentMethod]}
          </div>
        </div>
        <div className={styles.gridItem}>
          <div className={styles.label}>Адреса</div>
          <div className={styles.value}>{deliveryInfo.address}</div>
        </div>
        <div className={styles.gridItem}>
          <div className={styles.label}>Створено</div>
          <div className={styles.value}>
            {time(deliveryInfo.createdAt).format('YYYY/MM/DD HH:mm')}
          </div>
        </div>
        <div className={styles.gridItem}>
          <div className={styles.label}>Останнє оновлення</div>
          <div className={styles.value}>
            {time(deliveryInfo.updatedAt).format('YYYY/MMM/DD HH:mm')}
          </div>
        </div>
        <div className={styles.gridItem}>
          <div className={styles.label}>Сумма</div>
          <div className={styles.value}>{deliveryInfo.sum}грн</div>
        </div>
      </div>
    </div>
  );
};
