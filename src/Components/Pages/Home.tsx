import React from 'react';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();
  return (
    <>
      <h1>{t('pages.home.header')}</h1>
      <p>{t('pages.home.paragraph')}</p>
    </>
  );
}

export default Home;
