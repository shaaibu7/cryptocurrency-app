import React from 'react';
import { AiOutlineSetting } from 'react-icons/ai';
import { BiMicrophone } from 'react-icons/bi';
import styling from '../styles/Navbar.module.css';

const Navbar = () => (
  <nav className={styling.container}>
    <h1 className={styling.logo}>Crypto Store</h1>
    <div className={styling.icons}>
      <BiMicrophone />
      <AiOutlineSetting />
    </div>
  </nav>
);

export default Navbar;
