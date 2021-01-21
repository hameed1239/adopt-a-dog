import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { Form } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import styled, { keyframes } from 'styled-components';
import { faBone } from '@fortawesome/free-solid-svg-icons';
const Signup = () => {
    const [formState, setFormState] = useState({ userName: '', email: '', password: '' });
    const [addUser, { error }] = useMutation(ADD_USER);
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
            // execute addUser mutation and pass in variable data from form
            const { data } = await addUser({
                variables: { ...formState }
            });
            console.log(data);
            Auth.login(data.addUser.token);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <main>
            <div >
                <div >

                    <div >
                        <HomeContainer>
                            
                            <div className="home-img">
                                <h2 className="icon icon-bone"> <FontAwesomeIcon icon={faBone} /></h2>

                                <Form onSubmit={handleFormSubmit}>
                                    <Form.Group controlId="formBasicUsername">
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control type="text" name='userName' className='form-input' id='userName' value={formState.userName} placeholder="Enter username" onChange={handleChange} />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" name='email' className='form-input' id='email' value={formState.email} placeholder="Enter email" onChange={handleChange} />
                                        <Form.Text className="text-muted">
                                            We'll never share your email with anyone else.
                    </Form.Text>
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" name='password' className='form-input' id='password' value={formState.password} placeholder="Password" onChange={handleChange} />
                                    </Form.Group>
                                    <button className="btn-find" type="submit">Submit	<span className="shake-paw"><FontAwesomeIcon icon={faPaw} /></span></button>

                                </Form>
                            </div>
                        </HomeContainer>

                        {error && <div>Sign up failed</div>}


                    </div>
                </div>
            </div>
        </main>
    );
};

export default Signup;


const HomeContainer = styled.div`
 min-height:100vh;
 display:flex;
 justify-content:center;
  background: rgb(231,242,247);
  background: linear-gradient(0deg, rgba(231,242,247,1) 0%, rgba(255,255,255,1) 40%, rgba(229,236,240,1) 100%);
 div{
   margin:0 2rem;
   padding:3rem;

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
   a{
     ${'' /* width:80%; */}
     
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
    .icon{
        color: #c7d2d9;
        font-size:3rem;
        transform:rotate(-20deg);

      }
 }

`
