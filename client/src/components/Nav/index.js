import React,{useState} from 'react';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import styled from "styled-components";
import BurgerMenu from './BurgerMenu';
import Sidebar from './Sidebar';





function Nav() {
  // function showNavigation() {}

  return (
    <NavbarEl>
      <div>
        <Link to='/' className='brand-logo'>
          
          <p><span>
            <FontAwesomeIcon icon={faPaw} />
          </span>AdoptMe</p>
        </Link>
      </div>
      <BurgerMenu />

      
    </NavbarEl>
  );
}

export default Nav;

const NavbarEl = styled.nav`
    background-color:#e5ecf0;
    position: relative;
    height: 70px;
    padding: 0 2%;
    z-index:10;
    display:flex;
    justify-content:space-between;
    
     .brand-logo{
      text-decoration:none;
      text-shadow:0px 0px  49px rgba(13,12,34,0.6);
      
    
    }
    .brand-logo p {     
      font-family: "Alegreya Sans", sans-serif;
      font-size:1.9rem !important; 
      color:black;
     
      margin-bottom :0rem;
      font-weight:bold;
    } 
   
    .brand-logo span{
      margin-right:.8rem;
      font-size:2rem !important;
      color: #11be8b;
    }

 
 

`