import React, { useState, useEffect } from 'react';
import { NavLink , useNavigate } from "react-router-dom";
import CartImg from '../assets/cart.png';
// import "../Pages/Home/Home.css";

const Navbar = () => {
  const navigate = useNavigate()
  const [count, setCount] = useState(0);
 
  useEffect(() => {
    const updateCount = () => {
      const storedItems = JSON.parse(localStorage.getItem("item")) || [];
      setCount(storedItems.length);
    };  

    // Update count immediately
    updateCount();

    // Set interval to update count every second
    const intervalId = setInterval(updateCount, 1000);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  

  const handleNavigate=()=>{
    navigate('/cart')
  }
  return (
    <nav id="navbar">
      <div id="megma">
        {/* <NavLink to="/">Megma</NavLink> */}
        <a href="http://localhost:3000/">Megma</a>
      </div>
      <ul>
        <li className="item">
          <NavLink exact activeClassName="active" to="/about">About</NavLink>
        </li>
        {/* <li className="item">
          <NavLink exact activeClassName="active" to="/gallery">Gallery</NavLink>
        </li> */}
        <li className="item">
          <NavLink exact activeClassName="active" to="/menu">Menu</NavLink>
        </li>
        <li className="item">
          <NavLink exact activeClassName="active" to="/booking">Book a Table</NavLink>
          {/* <a href="booking.html">Book a Table</a> */}
        </li>
        <li className="item">
          <NavLink exact activeClassName="active" to="/contact">Contact Us</NavLink>
        </li>
        <li className="item">
          <NavLink exact activeClassName="active" to="/feedback">Feedback</NavLink>
        </li>
        <li className="item">
          <NavLink exact activeClassName="active" to="/login">Login</NavLink>
        </li>
       

        {/* <div className="btn1">
          <button>Payments</button>
        </div> */}
        <div className="btn2">
          <button><NavLink exact activeClassName="active" to="/order">Order Online</NavLink></button>
        </div>
        <button onClick={()=>handleNavigate()} ><img src={CartImg} style={{height:"20px", width:"20px",backgroundColor:"white"}}/>{count}</button>
      </ul>
    </nav>
  );
};

export default Navbar;
