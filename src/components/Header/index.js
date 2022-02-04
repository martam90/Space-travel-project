import React, { useState } from 'react';
import { Link } from "gatsby";
import logo from '../../../public/images/shared/logo.svg';
import hamburgerMenu from '../../../public/images/shared/icon-hamburger.svg';
import iconClose from '../../../public/images/shared/icon-close.svg';
import Navigation from '../Navigation';

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(true);
  }

  const closeMenu = () => {
    setIsOpen(false);
  }

  return (
    <header className="header">
      <a href="#main" className="skip-links">Skip to main content</a>
      <Link to="/">
        <img src={logo} alt="Space travel logo" className="header__logo"></img>
      </Link>
      <button className="header__menu" aria-expanded={isOpen ? "true" : "false"} aria-controls="navigation">
        <span className="sr-only">Menu</span>
          <img className={isOpen ? "header__menu--img" : "header__menu--img active"} src={hamburgerMenu} alt="hamburger menu" onClick={openMenu}></img>
          <img className={isOpen ? "header__menu--img active" : "header__menu--img"} src={iconClose} alt="hamburger menu close" onClick={closeMenu}></img>
      </button>
      <Navigation id="navigation" isOpen={isOpen} setIsOpen={setIsOpen}
      />
    </header>
  );
};


export default Header;