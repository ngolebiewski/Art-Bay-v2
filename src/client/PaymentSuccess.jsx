import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const PaymentSuccess = () => {
  return (
    <div className="container text-center mt-5">
      <h1 className="mb-4">Thank You!</h1>
      <h3 className="mb-3">Your Payment was successful!</h3>
      <p className="mb-4">You will receive an Email shortly with your order number, tracking details and receipt.</p>
      <Link to="/">
        <Button variant="primary">Continue Shopping</Button>
      </Link>
    </div>
  );
};

export default PaymentSuccess;
