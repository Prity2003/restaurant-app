import React, { Fragment } from "react";
import "./Gallery.css";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import image1 from '../../assets/1.jpg';
import image2 from '../../assets/2.jpg';
import image3 from '../../assets/3.jpg';
import image4 from '../../assets/4.jpg';
import image5 from '../../assets/5.jpg';
import image6 from '../../assets/6.jpg';
import image7 from '../../assets/7.jpg';


const Gallery = () => {
  return (
    <Fragment>
      <Navbar />
      <section className="gallery-wrapper">
        <i className="fa-solid fa-arrow-left button" id="prev"></i>
        <div className="gallery-image-container">
          <div className="gallery-carousel">
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image4} alt="" />
            <img src={image5} alt="" />
            <img src={image6} alt="" />
            <img src={image7} alt="" />
          </div>
          <i className="fa-solid fa-arrow-right button" id="next"></i>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};

export default Gallery;
