// Header.js
import React from "react";
import {Link } from 'react-router-dom'

const Header = () => {
    
  return (
    <header>
      <a href="#a">Logo</a>
      <nav>
        <ul>
          <li><a href="/">Home</a> </li>
          <li><a href="/produtos">produtos</a></li>
          <li><a href="/formulario">contato</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
