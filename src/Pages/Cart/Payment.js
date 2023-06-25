import React, { useState } from 'react';
import { toasterMsg } from '../../Components/Toaster';
import { NavLink , useNavigate } from "react-router-dom";
import "./Payment.css"

function PaymentForm({paymentSuccess}) {
    const navigate = useNavigate()
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform payment processing or API call here
    console.log('Payment submitted');
    toasterMsg("Thank you!", 'success');
    paymentSuccess();
    navigate('/')
  };

  return (
    <div className='payment-form'>
      <h2>Payment Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor="cardNumber">Card Number:</label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="Enter card number"
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor="expiryDate">Expiry Date:</label>
          <input
            type="text"
            id="expiryDate"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            placeholder="MM/YY"
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor="cvv">CVV:</label>
          <input
            type="text"
            id="cvv"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            placeholder="CVV"
            required
          />
        </div>
        <button className='pay-button' type="submit">Pay Now</button>
      </form>
    </div>
  );
}

export default PaymentForm;
