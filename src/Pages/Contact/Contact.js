import React, { Fragment, useState } from "react";
import "./Contact.css";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import CallImg from '../../assets/call.png';
import MailImg from '../../assets/mail.png';
import LocImg from '../../assets/loc.png';
import { toasterMsg } from '../../Components/Toaster';

//sudo service mongod start

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    note: "",
    errors: {},
    loading: false,
  });

  const handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };
  const validateForm = () => {
    let formIsValid = true;
    let errors = {};
    console.log(formData, "formData")
    if (!formData.firstName.length) {
      formIsValid = false;
      errors["firstName"] = `This field is required`;
    }
    if (!formData.lastName.length) {
      formIsValid = false;
      errors["lastName"] = `This field is required`;
    }
    if (!formData.email.length) {
      formIsValid = false;
      errors["email"] = `This field is required`;
    }
    if (formData.email.length) {
      let emailValid = formData.email.match(
        /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i
      );
      if (!emailValid) {
        formIsValid = false;
        errors["email"] = `Email is invalid`;
      }
    }
    if (!formData.subject.length) {
      formIsValid = false;
      errors["subject"] = `This field is required`;
    }
    if (!formData.note.length) {
      formIsValid = false;
      errors["note"] = `This field is required`;
    }
    setFormData({ ...formData, errors: errors });
    return formIsValid;
    }
    
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      setFormData({ ...formData, loading: true });
      const {firstName,lastName,email,subject,note } = formData;
      toasterMsg("Thank you! We will contact you soon", 'success');
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        note: "",
        errors: {},
        loading: false,
      })
      // const payload = { name, password, email, country, isAgreeTeamsConditions };
      // let res = await registerUser(payload);
      // setFormData({ ...formData, loading: false });
      // if (res) {
      //     history.push({
      //         pathname: '/login',
      //         state: {
      //             preStateName:
      //                 location.state && location.state.preStateName
      //                     ? location.state.preStateName
      //                     : null,
      //         },
      //     });
      // }
    }
  };
  return (
    <Fragment>
      <Navbar />
      <div className="contact-container">
        <div className="contact-box1">
          <h1>We would love to hear from you</h1>
          <div className="call">
            <img src={CallImg} alt="" />
            <span>:&nbsp; 9895366854</span>
          </div>
          <div className="mail">
            <img src={MailImg} alt="" />
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : info@megma.com
            </span>
          </div>
          <div className="ads">
            <img src={LocImg} alt="" />
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ensp;&ensp;:1st
              Floor,Block-A,Giridhar &emsp;&emsp;&emsp;&nbsp; Mall,
              Nikol,Ahmedabad,Gujarat 382410{" "}
            </span>
          </div>
          <div className="Connect">
            <h3>Connect with Us:</h3>
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

        <div className="contact-box2">
          <div className="form__wrapper">
            <form name="booking" method="POST">
              <div className="form__group">
                <label for="firstName">First Name</label>
                <br />
                <input type="text"
                 id="firstName" 
                 name="firstName" 
                 value={formData.firstName}
                 onChange={handleUserInput} 
              />
              {formData.errors.firstName && (
              <div className="error-label">
                {' '}
                {formData.errors.firstName}
              </div>
            )}
              </div>
              <div className="form__group">
                <label for="lastName">Last Name</label>
                <br />
                <input type="text" 
                id="lastName" 
                name="lastName" 
                value={formData.lastName}
              onChange={handleUserInput}
               />
              {formData.errors.lastName && (
              <div className="error-label">
                {' '}
                {formData.errors.lastName}
              </div>
            )}
              </div>
              <div className="form__group">
                <label for="email">Email</label>
                <br />
                <input type="email"
                 id="email" 
                 name="email" 
                 value={formData.email}
              onChange={handleUserInput} 
              />
              {formData.errors.email && (
              <div className="error-label">
                {' '}
                {formData.errors.email}
              </div>
            )}
              </div>
              <div className="form__group">
                <label for="subject">Subject</label>
                <br />
                <input type="text" 
                id="subject" 
                name="subject"
                value={formData.subject}
              onChange={handleUserInput} 
              />
              {formData.errors.subject && (
              <div className="error-label">
                {' '}
                {formData.errors.subject}
              </div>
            )}
              </div>
              <div className="form__group">
                <label for="note">Drop your question or comment here</label>
                <br />
                <textarea name="note" 
                id="note" 
                rows="3"
                value={formData.note}
              onChange={handleUserInput}></textarea>
              {formData.errors.note && (
              <div className="error-label">
                {' '}
                {formData.errors.note}
              </div>
            )}
              </div>
              <div className="btn">
                <button onClick={handleSubmit}>Submit</button>              
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Contact;
