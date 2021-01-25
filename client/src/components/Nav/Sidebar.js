import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import Auth from "../../utils/auth";
import { Link } from 'react-router-dom';



const logout = event => {
    event.preventDefault();
    Auth.logout();
};

const Sidebar = ({ open, onClick }) => {




    return (

        <UlContainer open={ open } onClick={ onClick }>
            <Link to='/' className='text-link'>
                <li>Home</li>
            </Link>

            <Link to='/dogs' className='text-link'>
                <li>Dogs</li>
            </Link>

            <Link to='/about' className='text-link'>
                <li>About</li>
            </Link>

            <Link to='/contact' className='text-link'>
                <li>Contact</li>
            </Link>

            {Auth.loggedIn() ? (
                <>
                    <li>
                        <Link to='/login' className='text-link' onClick={ logout }>
                            Logout
                    </Link>
                    </li>
                </>
            ) : (
                    <>
                        <Link to='/login' className='text-link'>
                            <li>Login</li>
                        </Link>
                    </>
                ) }
            <li>
                <Link to='/donate' className='text-link donate'>
                    Donate
            </Link>
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
        font-family:"Source Sans Pro",sans-serif;
    }
    .text-link:hover{
        text-decoration:none;
        color:#11be8b;
        opacity:.8;

    }

    li {
      list-style-type: none;
      font-weight: 600;
      padding:1rem 1.4rem;
    }
    .donate{
        background:#11be8b;
        color:white;
        padding:.4rem 1.3rem;
        font-weight:normal;
        box-shadow:0px 0px 50px 0px rgba(13,12,34,0.2);
    }
    .donate:hover{
        color:white;
        box-shadow:0px 0px 50px 0px rgba(13,12,34,0);

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
      transform:${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
      transition: transform 0.3s ease-in-out;

    

    li {
      padding:1rem;
      margin:.2rem;
    }
  
  }

`
