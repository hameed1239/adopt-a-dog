import React from 'react';
// import Auth from "../../utils/auth";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDog } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function Nav() {
  // function showNavigation() {}

  return (
    <nav className='navbar user-bg'>
      <Link to='/' className='text-link'>
        <span role='img' aria-label='logo' id='company-name'>
          <FontAwesomeIcon icon={faDog} />
        </span>
        <p id='company-name'>Animal Adoption</p>
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
          <Link to='/donate' className='text-link'>
            Donate
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
        <li>
          <Link to='/login' className='text-link'>
            Login
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
      </ul>

      {/* <nav>{showNavigation()}</nav> */}
    </nav>
  );
}

export default Nav;
