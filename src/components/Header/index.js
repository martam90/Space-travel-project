import React, { useState } from 'react';
import logo from '../../images/shared/logo.svg';
import hamburgerMenu from '../../images/shared/icon-hamburger.svg';
import Navigation from '../Navigation';

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(true);
  }

  return (
    <header className="header">
      <a href="/">
        <img src={logo} alt="Space travel logo" className="header__logo"></img>
      </a>
      <button className="header__menu--open">
          <img src={hamburgerMenu} alt="hamburger menu" onClick={toggleMenu}></img>
      </button>
      <Navigation isOpen={isOpen} setIsOpen={setIsOpen}
      />
    </header>
  );
};


export default Header;
