import React from "react";
import "./About.css";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import og1 from '../../assets/og1.png';
import og2 from '../../assets/og2.png';
import og3 from '../../assets/og3.png';

const About = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="about">
        <h3 className="ourGoals">Our Goals</h3>
        <p className="para">
          Our purpose is simple and bold. We exist to redefine how Indian
          restaurants taste, feel, and look. Our founding values consist of
          providing clean and heart-warming food prepared with ethical practices
          with a huge importance on our team members and our guests.Also
          considering Health safety of people and Time management,digital menu
          is created along with the QR code and online delivery in rural areas.
          Our main motive is to give the people a better food service with
          digitalized experience. We believe the happiness that comes from
          feeding souls is worth sharing.It is our pleasure to serve you.
        </p>
        <div className="para1">
          <p>
            <b>Head Chef - Pratik Raina</b>{" "}
          </p>
        </div>
        <div className="para2">
          <p>
            <b>General Manager - Deepak Talwar </b>
          </p>
        </div>
        <hr />
        <div className="about-images" data-aos="fade-up">
          <div className="about-image1">
            <img src={og1} alt="" />
          </div>
          <div className="about-image2">
            <img src={og2} alt="" />
          </div>
          <div className="about-image3">
            <img src={og3} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default About;
