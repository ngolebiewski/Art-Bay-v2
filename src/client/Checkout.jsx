import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';

const Checkout = ({ cartItems, totalAmount }) => {
  const navigate = useNavigate();
  const [shippingInfo, setShippingInfo] = useState({
    streetAdress: "",
    secondarySetreetAdress: "",
    city: "",
    state: "",
    country: "",
    phoneNumber: "",
    zipCode: "",
  });

  const [paymentInfo, setPaymentInfo] = useState({
    cardName: "",
    cardNumber: "",
    cvv: "",
    expirationDate: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name in shippingInfo) {
      setShippingInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
    } else if (name in paymentInfo) {
      setPaymentInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
    }
  };
  const handleCheckoutSubmit = async (e) => {
    e.preventDefault();

    try {
      navigate("/payment-success");
    } catch (error) {
      console.error("Error - Checkout FAILED", error);
    }
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Checkout</h1>
      <div className="row">
        <div className="col-md-6">
          <h3>Shipping Information</h3>
          <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">Phone Number:</label>
            <input
              type="tel"
              name="phoneNumber"
              className="form-control"
              value={shippingInfo.phoneNumber}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="streetAddress" className="form-label">Street Address:</label>
            <input
              type="text"
              name="streetAddress"
              className="form-control"
              value={shippingInfo.streetAddress}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="secondaryStreetAddress" className="form-label">Secondary Address:</label>
            <input
              type="text"
              name="secondaryStreetAddress"
              className="form-control"
              value={shippingInfo.secondaryStreetAddress}
              onChange={handleInputChange}
            />
          </div>
          <div className="row">
            <div className="col">
              <div className="mb-3">
                <label htmlFor="city" className="form-label">City:</label>
                <input
                  type="text"
                  name="city"
                  className="form-control"
                  value={shippingInfo.city}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="col">
              <div className="mb-3">
                <label htmlFor="state" className="form-label">State:</label>
                <input
                  type="text"
                  name="state"
                  className="form-control"
                  value={shippingInfo.state}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="col">
              <div className="mb-3">
                <label htmlFor="zipCode" className="form-label">Zip Code:</label>
                <input
                  type="text"
                  name="zipCode"
                  className="form-control"
                  value={shippingInfo.zipCode}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="col">
              <div className="mb-3">
                <label htmlFor="country" className="form-label">Country:</label>
                <input
                  type="text"
                  name="country"
                  className="form-control"
                  value={shippingInfo.country}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h3>Payment Information</h3>
          <form onSubmit={handleCheckoutSubmit}>
            <div className="mb-3">
              <label htmlFor="cardName" className="form-label">Card Name:</label>
              <input
                type="text"
                name="cardName"
                id="cardName"
                className="form-control"
                value={paymentInfo.cardName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="cardNumber" className="form-label">Card Number:</label>
              <input
                type="text"
                name="cardNumber"
                className="form-control"
                value={paymentInfo.cardNumber}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="expirationDate" className="form-label">Expiration Date:</label>
              <input
                type="text"
                name="expirationDate"
                className="form-control"
                value={paymentInfo.expirationDate}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="cvv" className="form-label">CVV:</label>
              <input
                type="text"
                name="cvv"
                id="cvv"
                className="form-control"
                value={paymentInfo.cvv}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="d-flex justify-content-end">
              <button type="submit" className="btn btn-primary">Complete Purchase</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;