import React from 'react';
import { Link } from "gatsby";
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
            <Link to="/" className="nav__link" aria-selected="true"><b>00</b> Home</Link>
          </li>

          <li className="nav__item">
            <Link to="/destination" className="nav__link" aria-selected="false"><b>01</b> Destination</Link>
          </li>

          <li className="nav__item">
            <Link to="/crew" className="nav__link" aria-selected="false"><b>02</b> Crew</Link>
          </li>

          <li className="nav__item">
            <Link to="/technology" className="nav__link" aria-selected="false"><b>03</b> Technology</Link>
          </li>
      </ul>
    </nav>
  );
};


export default Navigation;