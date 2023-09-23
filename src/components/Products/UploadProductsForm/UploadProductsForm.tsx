import React from 'react';

import { FileInput } from '../../Base/Input';
import { useUploadProducts } from '../../../hooks';
import { MButton } from '../../Base';

export const UploadProductsForm = () => {
  const { title, selectFile, sendProducts } = useUploadProducts();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        sendProducts();
      }}
    >
      {/*<h2>Завантажити товари</h2>*/}
      <FileInput label={title} onChange={selectFile} />
      <MButton type="submit">Відправити</MButton>
    </form>
  );
};
