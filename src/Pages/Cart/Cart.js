import React, { useState, useEffect } from "react";
import "./Cart.css";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import PaymentForm from "./Payment";

function Cart() {
  const [totalList, setTotalList] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [showCheckoutForm, setCheckoutForm] = useState(false)

  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem("item")) || [];
    setTotalList(storedList);
  }, []);

  useEffect(() => {
    calculateTotal();
  }, [totalList]);

  const calculateTotal = () => {
    let count = 0;
    let price = 0;
    totalList.forEach((item) => {
      count += item.count;
      price += item.count * item.price;
    });
    setTotalCount(count);
    setTotalPrice(price);
  };

  const handleIncrement = (index) => {
    const updatedList = [...totalList];
    updatedList[index].count += 1;
    setTotalList(updatedList);
    updateLocalStorage(updatedList);
  };

  const handleDecrement = (index) => {
    const updatedList = [...totalList];
    if (updatedList[index].count > 0) {
      updatedList[index].count -= 1;
      setTotalList(updatedList);
      updateLocalStorage(updatedList);
    }
  };
  const handleRemove = (index) => {
    const updatedList = [...totalList];
    updatedList.splice(index, 1);
    setTotalList(updatedList);
    updateLocalStorage(updatedList);
  };

  const updateLocalStorage = (updatedList) => {
    localStorage.setItem("item", JSON.stringify(updatedList));
  };

  const handleCheckout = () => {
    // Perform payment processing based on the selected payment method (card or UPI)
    if (paymentMethod === 'card') {
      // Handle card payment
      console.log('Card payment processing...');
    } else if (paymentMethod === 'upi') {
      // Handle UPI payment
      console.log('UPI payment processing...');
    }
    // Clear the cart and redirect to a success/thank you page
    // localStorage.removeItem('item');
    // setTotalList([]);
    // setTotalCount(0);
    // setTotalPrice(0);
    setCheckoutForm(true)
  };
  const paymentSuccess =() =>{
    localStorage.removeItem('item');
    setTotalList([]);
    setTotalCount(0);
    setTotalPrice(0);
  }

  return (
    <div className="cart-container">
      {!showCheckoutForm && <>
      {totalList.map((e, index) => (
          <div className="cart-item" key={index}>
          <div className="cart-item-image">
            <img src={e.image} alt="f" style={{ width: "100%", height: "100%" }} />
          </div>
          <span className="cart-item-title">{e.title}</span>
          <span className="cart-item-price">{e.price}</span>
          <button className="cart-button" onClick={() => handleDecrement(index)}>-</button>
          <span className="cart-item-count">{e.count}</span>
          <button className="cart-button" onClick={() => handleIncrement(index)}>+</button>
          <button className="cart-button" onClick={()=> handleRemove(index)}>Remove</button>
        </div>
      ))}
      </>}
       <div className="cart-summary">
        <span className="cart-summary-label">Total Count: {totalCount}</span>
        <span className="cart-summary-label">Total Price: {totalPrice}</span>
      </div>
      <button className="add-option">
        <a href={'/menu'}>Add more items</a>
      </button>
      <div className="payment-options">
        <label className="payment-option">
        <input
          type="radio"
          id="card"
          name="paymentMethod"
          value="card"
          checked={paymentMethod === 'card'}
          onChange={(e) => setPaymentMethod(e.target.value)}
        />
        <label htmlFor="card">Card</label>
        </label>
        <label className="payment-option">
        <input
          type="radio"
          id="upi"
          name="paymentMethod"
          value="upi"
          checked={paymentMethod === 'upi'}
          onChange={(e) => setPaymentMethod(e.target.value)}
        />
        <label htmlFor="upi">UPI</label>
        </label>
        <br/>
        <div>
        <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
      </div>
      </div>
      {(paymentMethod === 'card' && showCheckoutForm) && <PaymentForm paymentSuccess={paymentSuccess} />}
      
    </div>
  );
}

export default Cart;
