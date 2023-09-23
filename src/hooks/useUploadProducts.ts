import { ChangeEvent, useState } from 'react';

export const useUploadProducts = () => {
  const [file, setFile] = useState<File>();

  const selectFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFile(file);
    }
  };

  const title = file?.name || 'Оберіть файл';

  const sendProducts = () => {
    console.log('sendProducts: ', file?.name);
  };

  return {
    title,
    selectFile,
    sendProducts,
  };
};
