import React from 'react';
import Button from '../Button';
import modeIcon from '../../assets/icons/sleep-mode.png';

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <h2>Where in the world?</h2>
        <Button
          label="Dark Mode"
          icon={<img src={modeIcon} alt="dark mode icon" />}
        />
      </nav>
    </header>
  );
}

export default Header;
