import React from 'react'
import styled from 'styled-components';
import Auth from "../../utils/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';



const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

const Sidebar = ({open, onClick}) => {
    return (
        
      <UlContainer open={open}>
        <li onClick={onClick}>
            <Link to='/' className='text-link'>
            Home
            </Link>
        </li>
        <li onClick={onClick}>
            <Link to='/dogs' className='text-link'>
            Dogs
            </Link>
        </li>
        
        <li onClick={onClick}>
            <Link to='/about' className='text-link'>
            About
            </Link>
        </li>
        <li onClick={onClick}>
            <Link to='/contact' className='text-link'>
            Contact
            </Link>
        </li>
        {Auth.loggedIn() ? (
            <>
                <a href="/" className='text-link' onClick={logout}>
                Logout
                </a>
            </>
        ) : (
            <>
                <li onClick={onClick}>
                    <Link to='/login' className='text-link'>
                        Login
                    </Link>
                </li>
            </>
            )}
            <li onClick={onClick}>
                <FontAwesomeIcon icon={faUser} />
            </li>
    </UlContainer>

    )
}

export default Sidebar

const UlContainer = styled.ul`

    display:flex;
    flex-flow:row nowrap;

   .text-link{
        color: rgb(51, 94, 160);
       
        text-shadow:0px 0px 39px rgba(13,12,34,0.3);
        font-family: "lato", sans-serif;
    }

    li {
      list-style-type: none;
      font-weight: 700;
      padding:1rem 1rem;
    }

 

  @media only screen and (max-width: 768px) {
   
      flex-flow:column nowrap;
      background:white;
        position:fixed;
      border:none;
      top:0;
      right:0;
      height:100vh;
      width:300px;
      padding:4rem 2rem;
      transform:${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
      transition: transform 0.3s ease-in-out;

    

    li {
      padding:1rem;
      margin:.2rem;
    }
  
  }

`
