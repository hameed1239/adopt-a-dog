import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import styled, { keyframes } from 'styled-components';
import bgLogo from "../assets/dog-bg.jpg"
import { faBone } from '@fortawesome/free-solid-svg-icons';

const Login = (props) => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error }] = useMutation(LOGIN_USER);
    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await login({
                variables: { ...formState }
            });

            console.log(data);
            Auth.login(data.login.token);
        } catch (e) {
            console.error(e);
        }
    };
    
    return (
        <main >
            <HomeContainer>
                <div className="home-content">
                    <h2 className="icon icon-bone"> <FontAwesomeIcon icon={faBone} /></h2>
                    <h1>Dont't Buy<span>Adopt</span></h1>
                    <p>"Before you get a dog, you can't quite imagine what living with one might be like; afterward, you can't imagine living any other way."
                    <span className="quote-name">Caroline Knapp</span></p>
                    <Link to="/dogs"><button className="btn-find">Find dog 	<span className="shake-paw"><FontAwesomeIcon icon={faPaw} /></span></button></Link>
                </div>

                <div className="home-img">
                    <h2 className="icon icon-bone"> <FontAwesomeIcon icon={faBone} /></h2>

                    
                        <Form onSubmit={handleFormSubmit}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name='email' className='form-input' id='email' value={formState.email} placeholder="Enter email" onChange={handleChange} />
                                
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name='password' className='form-input' id='password' value={formState.password} placeholder="Password" onChange={handleChange} />
                            </Form.Group>
                            <button className="btn-find" type="submit">Submit	<span className="shake-paw"><FontAwesomeIcon icon={faPaw} /></span></button>
                            <Form.Text>
                                <Link to="/signup"><button className="btn-find" type="submit">Sign Up Now!<span className="shake-paw"><FontAwesomeIcon icon={faPaw} /></span></button></Link>
                            </Form.Text>
                        </Form>
                        {error && <div>Login failed</div>}
                    
                </div>
            </HomeContainer>


        </main>
    );
};

export default Login;

const HomeContainer = styled.div`
 min-height:100vh;
 display:flex;
 justify-content:space-between;
  background: rgb(231,242,247);
  background: linear-gradient(0deg, rgba(231,242,247,1) 0%, rgba(255,255,255,1) 40%, rgba(229,236,240,1) 100%);
 div{
   margin:0 2rem;
   padding:3rem;

 }
 
  .home-content{
    align-content:center;
    width:35%;
      h1{
        text-align:left !important;
        margin:2rem 0;
        span{
          font-size:2.4rem;
          color: #11be8b;
          
        }
       
      }
      #heading-bone{
          margin-left:8rem;
          transform:rotate(80deg)!important;
        }
      .icon{
        color:white;
        font-size:4rem;
        transform:rotate(30deg);

      }
      .quote-name{
        color:gray;
        margin-left:1rem;
        font-size:.8rem;
        font-style: italic;
        text-shadow: 4px 4px 33px rgba(0,0,0,0.5);

      }
      .btn-find{
        font-family: "Alegreya Sans", sans-serif;
        padding:.6rem 5rem !important;
        margin:2.6rem .3rem !important;
        text-decoration: none !important;
        border-radius:none;
        transition:ease-in-out .2s;
        cursor:pointer;
        background: rgb(130,246,165);
        background: linear-gradient(90deg, rgba(130,246,165,1) 50%, rgba(147,238,169,1) 100%);
        box-shadow: 2px 1px 39px 6px rgba(186,201,227,0.55);
       
      }
      
      p{
       font-family: "Alegreya Sans", sans-serif;
       font-size:1.1rem;

      }
  }


.shake-paw{
  color:white;
  align-self:right;
  margin-left:1rem;
}

   
 }
 .home-img {
  width:35%;
  height: 10%;
  margin:1rem;
  padding:0.2rem;
  border: 2px solid grey;
  align-items:left;
   text-align:center !important;
   
    .icon{
        color: #c7d2d9;
        font-size:3rem;
        transform:rotate(-20deg);

      }

      .btn-find{
        font-family: "Alegreya Sans", sans-serif;
        padding:.6rem 5rem !important;
        margin:2.6rem .3rem !important;
        text-decoration: none !important;
        border-radius:none;
        transition:ease-in-out .2s;
        cursor:pointer;
        background: rgb(130,246,165);
        background: linear-gradient(90deg, rgba(130,246,165,1) 50%, rgba(147,238,169,1) 100%);
        box-shadow: 2px 1px 39px 6px rgba(186,201,227,0.55);
       
      }
      .btn-find:hover{
        color:white;
          box-shadow: 2px 1px 9px 0px rgba(186,201,227,0.75);
          transform:scale(1.01);
          background: rgb(130,246,165);
          background: linear-gradient(90deg, rgba(130,246,165,1) 50%, rgba(147,238,169,1) 100%);
      }
 }

`

