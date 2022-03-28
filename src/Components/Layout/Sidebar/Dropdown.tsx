import React, { useState } from 'react';
import './Dropdown.scss';

interface Props {
  children: React.ReactNode,
  title: string
}

function Dropdown({ children, title }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`dropdown-container ${open ? 'open' : ''}`}>
      <button type="button" onClick={() => setOpen(!open)}>{title}</button>
      <div className="dropdown">
        {children}
      </div>
    </div>
  );
}

export default Dropdown;
