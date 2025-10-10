'use client';
import React from 'react';
import EyeSauron from '../../SVGImages/Logo/EyeOfSauron';
import style from './Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <div className={style.navbarContainer}>
      <div className={style.descriptionContainer}>
        <div className={style.icon_title}>
          <p className={style.font_title}>Mordor Portfolio</p>
        </div>
        <div>
          <EyeSauron />
        </div>
        <div className={style.options}>
          <p>Home</p>
          <p>About</p>
          <p>Projects</p>
          <p>Contact</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
