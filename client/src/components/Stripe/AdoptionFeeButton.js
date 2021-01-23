import React from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
    "pk_test_51IB2FYDWlFXjkhsb00oWZF7AHKVJBafB1nWfNSKIxOZbcAZFGdfefni001PUe6v64UBh7cKiwkDx60jJ9a9UzNGm00KsIE2n2p"
  );

const AdoptionFeeButton = (props) => {
  const handleClick = async (event) => {
    const stripe = await stripePromise;

    const response = await fetch("/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        product_data: 'Adopt Dog',
        amount: 150
      }),
    });

    const session = await response.json();

    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      alert("Something went wrong, but we're on it!");
    }
 };
    return (<button role="link" className="btn-adopt" onClick={handleClick}>
    Suggested Donation: $150
  </button>)
    
 
}

export default AdoptionFeeButton