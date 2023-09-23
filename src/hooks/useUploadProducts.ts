import { ChangeEvent, useState } from 'react';
import { useUploadProductsMutation } from '../api';

export const useUploadProducts = () => {
  const [uploadProducts] = useUploadProductsMutation();

  const [file, setFile] = useState<File>();

  const selectFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFile(file);
    }
  };

  const title = file?.name || 'Оберіть файл';

  const sendProducts = async () => {
    if (file) {
      await uploadProducts({ file });
      console.log('sendProducts: ', file?.name);
    }
  };

  return {
    title,
    selectFile,
    sendProducts,
  };
};
