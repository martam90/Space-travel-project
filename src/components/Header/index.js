import React, { useState } from 'react';
import { Link } from "gatsby";
import logo from '../../../public/images/shared/logo.svg';
import hamburgerMenu from '../../../public/images/shared/icon-hamburger.svg';
import Navigation from '../Navigation';

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(true);
  }

  return (
    
    <header className="header">
      <a href="#main" className="skip__links">Skip to main content</a>
      <Link to="/">
        <img src={logo} alt="Space travel logo" className="header__logo"></img>
      </Link>
      <button className="header__menu--open" aria-expanded={isOpen ? "true" : "false"} aria-controls="navigation">
        <span className="sr-only">Menu</span>
          <img src={hamburgerMenu} alt="hamburger menu" onClick={toggleMenu}></img>
      </button>
      <Navigation id="navigation" isOpen={isOpen} setIsOpen={setIsOpen}
      />
    </header>
  );
};


export default Header;