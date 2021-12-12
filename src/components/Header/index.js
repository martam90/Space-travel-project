import React, { useState } from 'react';
import { Link } from "gatsby";
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
      <Link to="/">
        <img src={logo} alt="Space travel logo" className="header__logo"></img>
      </Link>
      <button className="header__menu--open">
          <img src={hamburgerMenu} alt="hamburger menu" onClick={toggleMenu}></img>
      </button>
      <Navigation isOpen={isOpen} setIsOpen={setIsOpen}
      />
    </header>
  );
};


export default Header;