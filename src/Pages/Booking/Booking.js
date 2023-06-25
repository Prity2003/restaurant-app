import React, { Fragment, useState } from "react";
import "./Booking.css";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { toasterMsg } from '../../Components/Toaster';


const Booking = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    guestNumber: "",
    date: "",
    time: "",
    tableType: "",
    note: "",
    errors: {},
    loading: false,
  });
  const handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };
  const [startDate, setStartDate] = useState(null);

  const validateForm = () => {
    let formIsValid = true;
    let errors = {};
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
    if (!formData.guestNumber.length) {
      formIsValid = false;
      errors["guestNumber"] = `This field is required`;
    }
    if (!formData.date.length) {
      formIsValid = false;
      errors["date"] = `This field is required`;
    }
    if (!formData.time.length) {
      formIsValid = false;
      errors["time"] = `This field is required`;
    }
    if (!formData.tableType.length) {
      formIsValid = false;
      errors["tableType"] = `This field is required`;
    }

    console.log(errors, "errors");
    setFormData({ ...formData, errors: errors });
    return formIsValid;
  };
  // const generateMessage = () =>{
  //   setMessage("Thank you for booking");
  // }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      setFormData({ ...formData, loading: true });
      const { firstName,lastName, email,guestNumber, date,time,tableType, } = formData;
      toasterMsg("Thank you for booking!", 'success');
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        guestNumber: "",
        date: "",
        time: "",
        tableType: "",
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
      <section id="booking-form" data-aos="fade-up">
        <div className="booking-container">
          <h3 className="booking-form-title">Book Table</h3>
          <p className="booking-para">
            Please arrive on time for your reservation.If you are late for your
            reservation, your reservation will be canceled.
          </p>
          <div className="booking-line"></div>
          <div className="booking-form-wrapper">
            <form name="booking" method="POST" netlify>
              <div className="booking-form-group">
                <label for="firstName">First Name</label>
                <br />
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleUserInput}
                  required
                />
                {formData.errors.firstName && (
              <div className="error-label">
                {' '}
                {formData.errors.firstName}
              </div>
            )}
                
              </div>
              
              <div className="booking-form-group">
                <label for="lastName">Last Name</label>
                <br />
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleUserInput}
                  required
                />
                {formData.errors.lastName && (
              <div className="error-label">
                {' '}
                {formData.errors.lastName}
              </div>
            )}
              </div>
              <div className="booking-form-group">
                <label for="email">Email</label>
                <br />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleUserInput}
                  required
                />
                {formData.errors.email && (
              <div className="error-label">
                {' '}
                {formData.errors.email}
              </div>
            )}
              </div>
              <div className="booking-form-group">
                <label for="guestNumber">Guest Number</label>
                <br />
                <input
                  type="number"
                  id="guestNumber"
                  name="guestNumber"
                  min="1"
                  max="15"
                  value={formData.guestNumber}
                  onChange={handleUserInput}
                  required
                />
                {formData.errors.guestNumber && (
              <div className="error-label">
                {' '}
                {formData.errors.guestNumber}
              </div>
            )}
              </div>
              <div className="booking-form-group">
                <label for="date">Date</label>
                <br />
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleUserInput}
                  required
                />
                {formData.errors.date && (
              <div className="error-label">
                {' '}
                {formData.errors.date}
              </div>
            )}
              </div>
              <div className="booking-form-group">
                <label for="time">time</label>
                <br />
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleUserInput}
                  required
                />
                {formData.errors.time && (
              <div className="error-label">
                {' '}
                {formData.errors.time}
              </div>
            )}
              </div>
              <div className="booking-form-group">
                <label for="tableType">Table Type</label>
                <br />
                <select
                  name="tableType"
                  id="tableType"
                  value={formData.tableType}
                  onChange={handleUserInput}
                  required
                >
                  <option selected disabled>
                    Choose
                  </option>
                  <option value="small">Small(2 persons)</option>
                  <option value="medium">Small(4 persons)</option>
                  <option value="large">large(6 persons)</option>
                </select>
                {formData.errors.tableType && (
              <div className="error-label">
                {' '}
                {formData.errors.tableType}
              </div>
            )}
              </div>
              <div className="booking-form-group form__group__full">
                <label for="note">Note</label>
                <br />
                <textarea
                  name="note"
                  id="note"
                  rows="4"
                  value={formData.note}
                  onChange={handleUserInput}
                ></textarea>
              </div>
              <div className="btn">
                <input type="button"
                 value="Book Table"
                 onClick={handleSubmit}></input>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};

export default Booking;
