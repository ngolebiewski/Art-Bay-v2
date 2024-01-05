import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

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
    <>
      <h1>Checkout</h1>
      <h4>Shipping Deatils</h4>
      <form onSubmit={handleCheckoutSubmit}>
        <label>
          Phone Number:
          <br />
          <input
            type="tel"
            name="phoneNumber"
            value={shippingInfo.phoneNumber}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Street Adress:
          <br />
          <input
            type="text"
            name="streetAdress"
            value={shippingInfo.streetAdress}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Secondary Address:
          <br />
          <input
            type="text"
            name="secondaryStreetAddress"
            value={shippingInfo.secondarySetreetAdress}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          City:
          <br />
          <input
            type="text"
            name="city"
            value={shippingInfo.city}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          State:
          <br />
          <input
            type="text"
            name="state"
            value={shippingInfo.state}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Zip Code:
          <br />
          <input
            type="text"
            name="zipCode"
            value={shippingInfo.zipCode}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Country:
          <br />
          <input
            type="text"
            name="country"
            value={shippingInfo.country}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <br />
        <h4>Payment Details</h4>
        <label>
          Card Number:
          < br/>
          <input
            type="text"
            name="cardNumber"
            value={paymentInfo.cardNumber}
            onChange={(e) => handleInputChange(e, setPaymentInfo)}
            required
            />
        </label>
        <br />
        <label>
          Expiration Date:
          <br />
          <input
            type="text"
            name="expirationDate"
            value={paymentInfo.expirationDate}
            onChange={(e) => handleInputChange(e, setPaymentInfo)}
            required
          />
        </label>
        <br />
        <label>
          CVV:
          <br />
          <input
            type="text"
            name="cvv"
            value={paymentInfo.cvv}
            onChange={(e) => handleInputChange(e, setPaymentInfo)}
            required
          />
        </label>
        < br/>
        <label>
          Card Name:
          <br />
          <input
            type="text"
            name="cardName"
            value={paymentInfo.cardName}
            onChange={(e) => handleInputChange(e, setPaymentInfo)}
            required
          />
        </label>
        <br />
        <br />


          <button type="submit">Submit</button>
    
      </form>
    </>
  );
};

export default Checkout;
