import React from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
  href: string,
  title: string,
}

function OutsideLink({ href, title }: Props) {
  const { t } = useTranslation();
  return <a href={href} target="_blank" rel="noreferrer noopener" title={t('link.new_window')}>{title}</a>;
}

export default OutsideLink;
