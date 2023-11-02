import React from 'react';
import { useUploadProducts } from '../../../hooks';
import { FileInput, MButton } from '../../Base';
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
      <MButton variant="submit" type="submit">
        Відправити
      </MButton>
    </form>
  );
};
