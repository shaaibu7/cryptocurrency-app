import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineSetting } from 'react-icons/ai';
import { BiMicrophone } from 'react-icons/bi';
import { IoIosArrowBack } from 'react-icons/io';
import styling from '../styles/Navbar.module.css';

const Navbar = () => (
  <nav className={styling.container}>
    <NavLink to="/">
      <IoIosArrowBack className={styling.arrow} />
    </NavLink>
    <h1 className={styling.logo}>Crypto Store</h1>
    <div className={styling.icons}>
      <BiMicrophone />
      <AiOutlineSetting />
    </div>
  </nav>
);

export default Navbar;
