import React, { useRef } from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51IB2FYDWlFXjkhsb00oWZF7AHKVJBafB1nWfNSKIxOZbcAZFGdfefni001PUe6v64UBh7cKiwkDx60jJ9a9UzNGm00KsIE2n2p"
);

const CheckoutForm = () => {
  const amtRef = useRef(null);

  const handleClick = async (event) => {
    // Get Stripe.js instance
    const stripe = await stripePromise;

    // Call your backend to create the Checkout Session

    const response = await fetch("/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        product_data: 'Donation',
        amount: amtRef.current.value,
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

  return (
    <>
      <input type="text" placeholder="Amount" ref={amtRef} style={{
        border: "solid 1px grey",
        padding: "8px 20px",
        borderRadius: "5px"
      }}></input>
      <button role="link" onClick={handleClick} style={{
        border: "none",
        padding: "8px 20px",
        borderRadius: "5px",
        backgroundColor: "#ADD8E6",
        color: "green",
        background: "linear-gradient(90deg,rgba(130,246,165,1) 50%,rgba(147,238,169,1) 100%)"
      }}>
        Pay
      </button>
    </>
  );
};

export default CheckoutForm;