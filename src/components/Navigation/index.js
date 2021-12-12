import React from 'react';
import iconClose from '../../images/shared/icon-close.svg';

const Navigation = ({isOpen, setIsOpen}) => {

  const toggleMenu = () => {
    setIsOpen(false);
  }

  return (
    <nav className={isOpen ? 'nav nav--open' : 'nav'} >
      <ul className="nav__list">
        <button className="nav__menu--close" onClick={toggleMenu}>
          <img src={iconClose} alt="hamburger menu close"></img>
        </button>
          <li className="nav__item">
            <a href="#" className="nav__link"><b>00</b> Home</a>
          </li>

          <li className="nav__item">
            <a href="#" className="nav__link"><b>01</b> Destination</a>
          </li>

          <li className="nav__item">
            <a href="#" className="nav__link"><b>02</b> Crew</a>
          </li>

          <li className="nav__item">
            <a href="#" className="nav__link"><b>03</b> Technology</a>
          </li>
      </ul>
    </nav>
  );
};


export default Navigation;