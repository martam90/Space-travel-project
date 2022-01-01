import React from 'react';
import { Link } from "gatsby";
import iconClose from '../../../public/images/shared/icon-close.svg';

const Navigation = ({isOpen, setIsOpen}) => {

  const toggleMenu = () => {
    setIsOpen(false);
  }

  return (
    <nav className={isOpen ? 'nav nav--open' : 'nav'} >
      <ul className="nav__list">
        <button className="nav__menu--close" aria-expanded={isOpen ? "true" : "false"} onClick={toggleMenu} >
        <span className="sr-only">Menu</span>
          <img src={iconClose} alt="hamburger menu close"></img>
        </button>
        {/* aria-hidden true hide decorative numbers in nav. Those element are not visible for screen reader but are still present on the website */}
          <li className="nav__item">
            <Link to="/" activeClassName="active" className="nav__link"><span className="nav__link--number" aria-hidden="true">00</span> Home</Link>
          </li>

          <li className="nav__item">
            <Link to="/destination" activeClassName="active" className="nav__link"><span className="nav__link--number" aria-hidden="true">01</span> Destination</Link>
          </li>

          <li className="nav__item">
            <Link to="/crew" activeClassName="active" className="nav__link"><span className="nav__link--number" aria-hidden="true">02</span> Crew</Link>
          </li>

          <li className="nav__item">
            <Link to="/technology" activeClassName="active" className="nav__link"><span className="nav__link--number" aria-hidden="true">03</span> Technology</Link>
          </li>
      </ul>
    </nav>
  );
};


export default Navigation;