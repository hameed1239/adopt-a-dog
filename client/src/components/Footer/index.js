
import React from 'react';
import styled from 'styled-components'

function Footer() {
  // get current year
  const getDate = function () {
    return new Date().getFullYear()
  }

  return (
    <FooterEl className="footer">
      <div className="footer-container">
        <div>
          <h3>Animal-Info</h3>
          <div>
            <ul>
              <li>
                <a href="#" >Animal-vet</a>
              </li>
              <li>
                <a href="#" >blogs</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Contact</a>
            </li>
            <li>
              <a href="#work">Find a Dog</a>
            </li>
            <li>
              <a href="#work">Donate</a>
            </li>
          </ul>
        </div>
      </div>

      <p className="copyright">Copyright &copy; { getDate() } AdoptMe</p>
    </FooterEl>
  )
}

export default Footer;

const FooterEl = styled.footer`
background-color:black;
height: 42vh; 
postion:relative;
z-index:10;
overflow:hidden;

ul li a{
    color:#7f9195;
    text-decoration:none;
}

h3 {
  color: white;
  font-size: 1rem;
  margin: 1rem 0 !important;
}

.footer {
  background-color: rgb(0, 0, 0);
  display: block;
  padding: 5rem 0;
}

.footer-container {
  display: flex;
  justify-content: space-around;
  margin-bottom:1rem;
}

.footer-container div {
  display: block;
}

.footer ul {
  width: auto;
  padding: 1.5rem;
}

.footer ul li {
  color:black;
  list-style: none;
  opacity: 0.7;
  margin-bottom: 0.6rem;
  font-size: 0.8rem;
}

.footer ul li a {
  text-decoration: none !important;
  color: gray;
  color:#a1b5c0 !important;
  font-size: 0.8rem;
}

.footer li:hover {
  opacity: 1;
}

.footer div ul li a i {
  margin-right: 0.5rem;
  cursor: pointer;
  border-radius: 50%;
  border: 1px solid gray;
  padding: 0.44rem;
  color: gray;
}

.footer div ul li a i:hover {
  background-color: #2e4053;
  color: gray;
}

.copyright {
  color: #7f9195;
  opacity: 0.7;
  text-align: center;
  padding: 1rem;
  border-top: 1px solid white;
}
`
