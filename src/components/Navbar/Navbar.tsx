'use client';
import React from 'react';
import EyeSauron from './EyeSauron';
import style from './Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <div className={style.navbar}>
      <div className={style.icon_title}>
        <EyeSauron />
        <p className={style.font_title}>Mordor Portfolio</p>
      </div>
      <div className={style.options}>
        <p>Home</p>
        <p>About</p>
        <p>Projects</p>
        <p>Contact</p>
      </div>
    </div>
  );
};

export default Navbar;
