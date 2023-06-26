// import React, { useState } from 'react';
// import { toasterMsg } from '../../Components/Toaster';
// import { NavLink , useNavigate } from "react-router-dom";
// import {PaymentElement} from '@stripe/react-stripe-js';
import "./Payment.css";

// function PaymentForm({paymentSuccess}) {
//     const navigate = useNavigate()
//   const [cardNumber, setCardNumber] = useState('');
//   const [expiryDate, setExpiryDate] = useState('');
//   const [cvv, setCvv] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Perform payment processing or API call here
//     console.log('Payment submitted');
//     toasterMsg("Thank you!", 'success');
//     paymentSuccess();
//     navigate('/')
//   };

//   return (
//     <div className='payment-form'>
//       <h2>Payment Checkout</h2>
//       <form onSubmit={handleSubmit}>
//         {/* <div className='form-group'>
//           <label htmlFor="cardNumber">Card Number:</label>
//           <input
//             type="text"
//             id="cardNumber"
//             value={cardNumber}
//             onChange={(e) => setCardNumber(e.target.value)}
//             placeholder="Enter card number"
//             required
//           />
//         </div>
//         <div className='form-group'>
//           <label htmlFor="expiryDate">Expiry Date:</label>
//           <input
//             type="text"
//             id="expiryDate"
//             value={expiryDate}
//             onChange={(e) => setExpiryDate(e.target.value)}
//             placeholder="MM/YY"
//             required
//           />
//         </div>
//         <div className='form-group'>
//           <label htmlFor="cvv">CVV:</label>
//           <input
//             type="text"
//             id="cvv"
//             value={cvv}
//             onChange={(e) => setCvv(e.target.value)}
//             placeholder="CVV"
//             required
//           />
//         </div> */}
//         <PaymentElement />
//         <button className='pay-button' type="submit">Pay Now</button>
//       </form>
//     </div>
//   );
// }

// export default PaymentForm;


import React, { useMemo } from "react";
import { NavLink , useNavigate } from "react-router-dom";
import { toasterMsg } from '../../Components/Toaster';
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement
} from "@stripe/react-stripe-js";

import useResponsiveFontSize from "./useResponsiveFontSize";

const useOptions = () => {
  const fontSize = useResponsiveFontSize();
  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize,
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4"
          }
        },
        invalid: {
          color: "#9e2146"
        }
      }
    }),
    [fontSize]
  );

  return options;
};

const SplitForm = ({paymentSuccess}) => {
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();
  const navigate = useNavigate()
  

  const handleSubmit = async event => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement)
    });
    if(payload.error) {
      toasterMsg(payload.error?.message, 'danger');
    } else {
      toasterMsg("Thank you!", 'success');
      paymentSuccess();
      navigate('/')
    }
    console.log("[PaymentMethod]", payload);
  };
<br/>

  return (
    <div className='payment-form'>
      <h2>Payment Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor="cardNumber">Card Number:</label>
          {/* <input
          type="text"
          id="cardNumber"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          placeholder="Enter card number"
          required
        /> */}
          <CardNumberElement
            options={options}
            onReady={() => {
              console.log("CardNumberElement [ready]");
            }}
            onChange={event => {
              console.log("CardNumberElement [change]", event);
            }}
            onBlur={() => {
              console.log("CardNumberElement [blur]");
            }}
            onFocus={() => {
              console.log("CardNumberElement [focus]");
            }}
          />
        </div>
        <div className='form-group'>
          <label htmlFor="expiryDate">Expiry Date:</label>
          {/* <input
          type="text"
          id="expiryDate"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
          placeholder="MM/YY"
          required
        /> */}
          <CardExpiryElement
            options={options}
            onReady={() => {
              console.log("CardNumberElement [ready]");
            }}
            onChange={event => {
              console.log("CardNumberElement [change]", event);
            }}
            onBlur={() => {
              console.log("CardNumberElement [blur]");
            }}
            onFocus={() => {
              console.log("CardNumberElement [focus]");
            }}
          />
        </div>
        <div className='form-group'>
          <label htmlFor="cvv">CVV:</label>
          {/* <input
          type="text"
          id="cvv"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          placeholder="CVV"
          required
        /> */}
          <CardCvcElement
            options={options}
            onReady={() => {
              console.log("CardNumberElement [ready]");
            }}
            onChange={event => {
              console.log("CardNumberElement [change]", event);
            }}
            onBlur={() => {
              console.log("CardNumberElement [blur]");
            }}
            onFocus={() => {
              console.log("CardNumberElement [focus]");
            }}
          />
        </div>
        <button className='pay-button' type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default SplitForm;
