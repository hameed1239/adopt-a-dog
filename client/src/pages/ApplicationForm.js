import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import {
    QUERY_USERS
} from "../utils/queries";
import { UPDATE_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import styled, { keyframes } from 'styled-components';
import { faBone } from '@fortawesome/free-solid-svg-icons';
const ApplicationForm = () => {
    const [formState, setFormState] = useState("");
    const [updateUser, { error }] = useMutation(UPDATE_USER);

    const {data: userData} = useQuery(QUERY_USERS);
    const emailUser = Auth.getProfile().data.email;
    console.log(emailUser);
    const userDataID = userData?.users || [];
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
            {userDataID.map((user) => {
                 if (user.email === emailUser){
                     formState._id = user._id;
                 }
            })}    
            formState.phone = parseInt(formState.phone);
            formState.noOfKids = parseInt(formState.noOfKids);
            formState.otherDogs = parseInt(formState.otherDogs);
            // execute addUser mutation and pass in variable data from form
            const { data } = await updateUser({
                variables: { ...formState }
            });
            console.log(data);
            if (data) {
                alert("You have successfully Submitted your form, We will let you know if your application is approved.");
                window.location.assign('/');
            }
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
                                    <Form.Group controlId="formBasicFirstName">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control type="text" name='firstName' className='form-input' id='firstName' value={formState.firstName} placeholder="Enter First Name" onChange={handleChange} />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicLastName">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control type="text" name='lastName' className='form-input' id='lastName' value={formState.lastName} placeholder="Enter Last Name" onChange={handleChange} />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicAddress">
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control type="text" name='address' className='form-input' id='address' value={formState.address} placeholder="Enter Address" onChange={handleChange} />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicPhone">
                                        <Form.Label>Phone Number</Form.Label>
                                        <Form.Control type="number" name='phone' className='form-input' id='phone' value={formState.phone} placeholder="Enter Phone Number" onChange={handleChange} />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicCity">
                                        <Form.Label>City</Form.Label>
                                        <Form.Control type="text" name='city' className='form-input' id='city' value={formState.city} placeholder="Enter City" onChange={handleChange} />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicState">
                                        <Form.Label>State</Form.Label>
                                        <Form.Control type="text" name='state' className='form-input' id='state' value={formState.state} placeholder="Enter State" onChange={handleChange} />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicZip">
                                        <Form.Label>Zip</Form.Label>
                                        <Form.Control type="text" name='zip' className='form-input' id='zip' value={formState.zip} placeholder="Enter Zip" onChange={handleChange} />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicOtherDogs">
                                        <Form.Label>Do you have dogs?</Form.Label>
                                        <Form.Control type="number" name='otherDogs' className='form-input' id='otherDogs' value={formState.otherDogs} placeholder="Number of dogs" onChange={handleChange} />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicnoOfKids">
                                        <Form.Label>Do you have any kids?</Form.Label>
                                        <Form.Control type="number" name='noOfKids' className='form-input' id='noOfKids' value={formState.noOfKids} placeholder="Number of Kids" onChange={handleChange} />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicHouseOrApartment">
                                        <Form.Label>Do you have a house or an Apartment</Form.Label>
                                        <Form.Control type="text" name='houseOrApartment' className='form-input' id='houseOrApartment' value={formState.houseOrApartment} placeholder="House or Apartment?" onChange={handleChange} />
                                    </Form.Group>
                                    <button className="btn-find" type="submit">Submit	<span className="shake-paw"><FontAwesomeIcon icon={faPaw} /></span></button>

                                </Form>
                            </div>
                        </HomeContainer>


                    </div>
                </div>
            </div>
        </main>
    );
};

export default ApplicationForm;


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