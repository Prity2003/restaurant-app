import React from "react";
import "./Home.css";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const Home = () => {
  return (
    <React.Fragment>
    <Navbar />
      <div className="box">
        <h1>Welcome!</h1>
        <br />
        <p>
          Experience the Flavors and Hospitality of India with healthy and
          hygienic food service.
        </p>
        <br />
        <button>
           <a href={`/order`}>Order Online</a>
           </button>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="container">
        <div className="box1">
          <p className="para1">
            {" "}
            &ensp;Mon-Fri: 11am - 11pm <br />
            Sat-Sun: 11am - 1am
          </p>
        </div>
        <div className="box2">
          <p className="para2">
            1st Floor Block-A,Giridhar Mall,Nikol,Ahmedabad, Gujarat 382410
          </p>
        </div>
        <div className="box3">
          <h3>Follow US</h3>
          <div className="social">
            <a href="https://www.facebook.com">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.twitter.com">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Home;

// import React from "react";
// import "./Home.css";

// const Home = () => {
//   return (

//     );
// }

// export default Home;
