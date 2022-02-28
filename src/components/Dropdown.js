import React, { useState } from 'react';
import Button from './Button';
import dropdownIcon from '../assets/icons/down-arrow.png';

function Dropdown() {
  const [show, toggle] = useState(false);
  return (
    <div className="dropdown">
      <Button
        onClick={() => toggle(!show)}
        label="Filter By Region"
        className="btn-dropdown"
        rightIcon={<img src={dropdownIcon} alt="dropdown-icon" />}
      />
      <ul className={show && 'active'}>
        {['Africa', 'Amercia', 'Asia', 'Europe', 'Oceania'].map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dropdown;
