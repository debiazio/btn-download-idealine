import React from 'react';
import styles from './styles.css';

const BtDownload = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://stermax.com.br/images_idealine/manuais/novembro2026/Manual_%20DIGITAL%20JOLLIE_5L%202.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button className={styles['btn-download']} onClick={handleDownload}>
      BAIXAR MANUAL
    </button>
  );
};

export default BtDownload;

