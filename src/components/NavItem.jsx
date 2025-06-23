import React, { useState } from 'react';
import Dropdown from './Dropdown';

const NavItem = ({ label, dropdown, isMobile }) => {
  const [isOpen, setIsOpen] = useState(false);

  // For mobile, we might want different behavior, but keeping desktop behavior for now
  return (
    <li
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="hover:text-black cursor-pointer">{label}</button>
      {dropdown && isOpen && !isMobile && <Dropdown dropdown={dropdown} />}
    </li>
  )
}

export default NavItem;