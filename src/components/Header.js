import React, { useState } from 'react';

//import components
import Logo from '../assets/img/logo.png'
import Nav from '../components/Nav'
import NavMobile from '../components/NavMobile'

//import icons
import {FaBars} from 'react-icons/fa'
import {BsArrowRight} from 'react-icons/bs'

const Header = () => {
  return (
    <header>
      <div className='container mx-auto'>
      <div>
        {/* logo */}
        <a href='nav'>
          <img src={Logo} alt='Logo' /> 
        </a>

        {/* nav - initially hidden / show on large screen */}
        <div>
          <Nav></Nav>
        </div>
        </div>
      </div>
    </header>
  )
};

export default Header;
