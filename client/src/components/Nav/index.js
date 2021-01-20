import React from 'react';
import Auth from "../../utils/auth";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import styled from "styled-components";



const logout = event => {
  event.preventDefault();
  Auth.logout();
};

function Nav() {
  // function showNavigation() {}

  return (
    <NavbarEl className='navbar user-bg'>
      <Link to='/' className='brand-logo'>
        
        <p id='company-name'><span>
          <FontAwesomeIcon icon={faPaw} />
        </span>AdoptMe</p>
      </Link>

      <ul>
        <li>
          <Link to='/' className='text-link'>
            Home
          </Link>
        </li>
        <li>
          <Link to='/dogs' className='text-link'>
            Dogs
          </Link>
        </li>
        
        <li>
          <Link to='/about' className='text-link'>
            About
          </Link>
        </li>
        <li>
          <Link to='/contact' className='text-link'>
            Contact
          </Link>
        </li>
<<<<<<< HEAD
        {Auth.loggedIn() ? (
            <>
              <a href="/" onClick={logout}>
                 Logout
              </a>
            </>
         ) : (
            <>
               <li>
                   <Link to='/login' className='text-link'>
                   Login
                  </Link>
                </li>
                </>
             )}
          <li>
               <FontAwesomeIcon icon={faUser} />
          </li>
=======
        <li>
          <Link to='/donate' className='text-link'>
            Donate
          </Link>
        </li>
        
        <li>
          <FontAwesomeIcon icon={faUser} />
        </li>
        {/* <li className='mx-1'>
          <a href='/' onClick={() => Auth.logout()}>
            Logout
          </a>
        </li> */}
>>>>>>> a7e8349e495c4d278aa90d639b56819193651067
      </ul>

      {/* <nav>{showNavigation()}</nav> */}
    </NavbarEl>
  );
}

export default Nav;

const NavbarEl = styled.nav`
    background-color:#e5ecf0;
    
  .brand-logo{
    text-decoration:none;
    font-size:0rem !important;
    margin-bottom:1.5rem;
    text-shadow:0px 0px  39px rgba(13,12,34,0.7);


  }
    .brand-logo p #campany-name{     
      font-family: "Alegreya Sans", sans-serif;
      font-weight:100;
      color:black !important;
      padding:1rem 0;
    }
    .brand-logo p {
      font-weight:100;
      font-size:1.4rem !important; 
      color:black;
    }
    .brand-logo span{
      margin-right:.8rem;
      font-size:2rem !important;
      color: #11be8b;
    }
    .text-link{
        color: rgb(51, 94, 160);

        ${'' /* font-weight: bold; */}
        text-shadow:0px 0px 19px rgba(13,12,34,0.3);
        font-family: "lato", sans-serif;
${'' /* 
      font-weight:lighter; */}


    }

  


`