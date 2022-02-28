import React from 'react';
import Dropdown from '../Dropdown';
import Input from '../Input';

function SearchHeader() {
  return (
    <nav className="header-search">
      <header>
        <Input />
      </header>
      <Dropdown />
    </nav>
  );
}

export default SearchHeader;
