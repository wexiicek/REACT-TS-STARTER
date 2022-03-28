import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import LocaleSwitch from '../LocaleSwitch/LocaleSwitch';
import Dropdown from './Dropdown';

interface Props {
  sidebarOpen: boolean,
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function Sidebar({ sidebarOpen, setSidebarOpen }: Props) {
  const { t } = useTranslation();

  const handleOverlayClick = (): void => {
    setSidebarOpen(false);
  };

  const handleSidebarClick = (e: React.MouseEvent): void => {
    e.stopPropagation();
  };

  return (
    <div
      role="banner"
      className={`sidebar-container ${sidebarOpen ? 'sidebar-container-open' : ''}`}
      onClick={handleOverlayClick}
    >
      <ul className="sidebar" onClick={(e) => handleSidebarClick(e)}>
        <li><NavLink to="/">{t('link.nav.home')}</NavLink></li>
        <li>
          <Dropdown title="Dropdown">
            <NavLink to="#">Dropdown Item 1</NavLink>
            <NavLink to="#">Dropdown Item 2</NavLink>
          </Dropdown>
        </li>

        <LocaleSwitch />
      </ul>
    </div>
  );
}

export default Sidebar;
