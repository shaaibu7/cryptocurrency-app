import React from 'react';
import styling from '../styles/Header.module.css';

const Header = () => (
  <div className={styling.head}>
    <h2>Cryptocurrency Store</h2>
    <p className={styling.headText}>The home of Crypto`s</p>
  </div>
);

export default Header;
