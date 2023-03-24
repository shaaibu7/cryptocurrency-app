import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineSetting } from 'react-icons/ai';
import { BiMicrophone } from 'react-icons/bi';
import { IoIosArrowBack } from 'react-icons/io';
import styling from '../styles/NavbarDetails.module.css';

const NavbarDetails = () => (
  <nav className={styling.container}>
    <div className={styling.logoContain}>
      <NavLink to="/">
        <IoIosArrowBack className={styling.arrow} />
      </NavLink>
      <h1 className={styling.logo}>Crypto Store</h1>
    </div>
    <div className={styling.icons}>
      <BiMicrophone />
      <AiOutlineSetting />
    </div>
  </nav>
);

export default NavbarDetails;
