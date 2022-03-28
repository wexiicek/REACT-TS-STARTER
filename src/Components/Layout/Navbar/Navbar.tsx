import React from 'react';
import { NavLink } from 'react-router-dom';
import Hamburger from '../Hamburger/Hamburger';

interface Props {
  sidebarOpen: boolean,
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function Navbar({ sidebarOpen, setSidebarOpen }: Props) {
  return (
    <div className="top-nav">
      <Hamburger sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <NavLink to="/">WEX STARTER</NavLink>
    </div>
  );
}

export default Navbar;
