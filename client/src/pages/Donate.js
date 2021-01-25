import React from "react";
import StripePayment from "../components/Stripe/StripePayment";
import bgDonate from "../assets/dog-bg-2.jpg"

import styled from 'styled-components';
const Donate = () => {

  return (
    <DonateContainer style={ { minHeight: "100vh", maxWidth: "100%" } }>

      <div className="home-content">

        <h2>Thank you for your donation!</h2>
        <p>The AdoptMe is a national leader in animal rescue and protection, working tirelessly to put an end to animal abuse and neglect.
         As an AdoptMe  you can fight cruelty and give animals a second chance at life nationwide . Your donation is an easy way to make a difference for animals.</p>

        <StripePayment />
      </div>

      <div className="home-img" id="dog-picture-banner">
        <img src={ bgDonate } alt="dog"/>

      </div>

    </DonateContainer>
  );
};

export default Donate;

const DonateContainer = styled.div`
min-height:100vh;
display:flex;
justify-content:space-between;
 
.home-content{
  align-content:center;
  width:50%;
  padding: 2rem 8rem;
  margin:2rem;
}

h2{
  margin:2rem 0;
  font-family: "Alegreya Sans", sans-serif;
  font-weight:normal;
  color: #11be8b;
}

p{
  font-family: "Alegreya Sans", sans-serif;
  font-size:1.1rem;
  margin:3rem 0;
}
   
.home-img {
  width:50%;
  align-items:left;
  text-align:center !important;
}
 
img{
  width:100%;
}

@media only screen and (max-width: 1080px){
  .home-content{
    align-content:center;
    width:50%;
    padding: 1rem 5rem;
    margin:2rem;
  }
}

@media only screen and (max-width: 820px){
  display:block;

  .home-content{
    width:90%;
    padding: 1rem 8rem;
  }

  .home-img {
    width:100%;
  }
}

@media only screen and (max-width: 620px){
  display:block;

  .home-content{
    padding: 1rem 5rem;
  }
}

@media only screen and (max-width: 420px){
  display:block;

  .home-content{
    width:90%;
    padding: 1rem 2rem;
  }
}
`
