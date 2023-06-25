import React, { Fragment, useState } from "react";
import "./Order.css";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const Order = () => {
  const [state, setState] = useState(1);

  const handleTab = (val) => {
    setState(val)
  }
  return (
    <Fragment>
      <Navbar />
      <div className="order">
        <h className="order-para1">Order Online</h>
        <p className="order-para2">Order your food now and enjoy it!!</p>
        <hr />
        <div className="order-box">
          <h2>How do you want to get your order?</h2>
          <div className="order-button">
            {/* <div className="button1"> */}
            <button className="button1" type="button" onClick={() => handleTab(1)}>Pickup</button>
            {/* </div> */}
            {/* <div className="button2"> */}
            <button className="button2" type="button" onClick={() => handleTab(2)}>Dine-in</button>
            {/* </div> */}
          </div>
          {state === 1 ? (
          <div className="pickup">
            <label for="pickup">Pickup Location</label>
            <br />
            <select name="pickup" id="pickup" required>
              <option selected disabled></option>
              <option value="">Vastral</option>
              <option value="">Nikol</option>
              <option value="">Vadaj</option>
            </select>
            <div className="pickup-link">
              <a href="#">Show on map</a>
            </div>
          </div>
          ) : (
          <div className="dine-in">
            <label for="table-no">Table number</label>
            <br />
            <input type="text" id="table-no" name="Table-no" required />
          </div>
          )}
          <div className="order-now">
            <button><a href={`/menu`}>Order Now</a></button>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Order;
