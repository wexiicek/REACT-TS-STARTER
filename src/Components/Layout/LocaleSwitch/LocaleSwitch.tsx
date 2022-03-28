import React, { useState } from 'react';
import i18next from 'i18next';
import { toast } from 'react-toastify';

function LocaleSwitch() {
  const [locale, setLocale] = useState<string>(localStorage.getItem('selectedLocale') || 'en');

  const changeLocale = (localeString: string): void => {
    if (localeString.length === 2) {
      localStorage.setItem('selectedLocale', localeString);
      setLocale(localeString);
      i18next.changeLanguage(localeString);
      toast.success(i18next.t('locale.changed'), {
        autoClose: 3000,
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const localeString = e.target.value;
    changeLocale(localeString);
  };

  return (
    <select className="locale-switch" onChange={(e) => handleChange(e)} value={locale === 'sk' ? 'sk' : 'en'}>
      <option value="sk">Slovenčina</option>
      <option value="en">English</option>
    </select>
  );
}

export default LocaleSwitch;
