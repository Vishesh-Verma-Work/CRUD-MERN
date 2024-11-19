import React from 'react';
import '../styles/header.css';
import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">MERN App</div>
      <nav className="header__nav">
        <NavLink to={"/"} className="header__link">Home</NavLink>
        <NavLink to={"/create"} className="header__link">Create</NavLink>
        <NavLink to={"/all"} className="header__link">Show All</NavLink>
      </nav>
      <div className="header__toggle" id="headerToggle">
        ☰
      </div>
    </header>
  );
};

export default Header;
