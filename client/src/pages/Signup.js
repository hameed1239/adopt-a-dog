import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import styled, { keyframes } from 'styled-components';
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
            <SignUpContainer>
            <Form onSubmit={handleFormSubmit}>
               <Form.Group controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text"  name='userName' className='form-input' id='userName' value={formState.userName}  placeholder="Enter username" onChange={handleChange}/>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email"  name='email' className='form-input' id='email' value={formState.email}  placeholder="Enter email" onChange={handleChange}/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"  name='password' className='form-input' id='password'  value={formState.password} placeholder="Password"  onChange={handleChange}/>
                </Form.Group>
                <button className="btn-find" type="submit">Submit	<span className="shake-paw"><FontAwesomeIcon icon={faPaw} /></span></button>
        
            </Form>
            {error && <div>Sign up failed</div>}
            </SignUpContainer>
            
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
const SignUpContainer = styled.div`
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
`