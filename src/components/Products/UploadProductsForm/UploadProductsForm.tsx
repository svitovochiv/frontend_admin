import React from 'react';
import { useUploadProducts } from '../../../hooks';
import { FileInput, ButtonSubmit } from '../../Base';
import styles from './UploadProductsForm.module.scss';

export const UploadProductsForm = () => {
  const { title, selectFile, sendProducts } = useUploadProducts();

  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();
        await sendProducts();
      }}
      className={styles.container}
    >
      <p>Оберіть файл з продуктами</p>
      <FileInput label={title} onChange={selectFile} />
      <ButtonSubmit type="submit">Відправити</ButtonSubmit>
    </form>
  );
};
