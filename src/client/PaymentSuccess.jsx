import React from "react";
import { Link } from "react-router-dom";

const PaymentSuccess = () => {
  return (
    <>
      <h1>Thank You!</h1>
        
        <h3>Your Payment was Successful!</h3>
      <p>You will receive an Email shortly with your order number, tracking details, and receipt.</p>
      <Link to="/">
        <button>Continue</button>
      </Link>
    </>
  );
};

export default PaymentSuccess;