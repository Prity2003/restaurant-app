import React, { useState } from "react";
import "./SignUp.css";
import { connect } from 'react-redux';
import { NavLink, useNavigate } from "react-router-dom";
import { registerUser } from '../Login/store/auth.action';

const SignUp = ({ registerUser }) => {
  const history = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
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
    if (!formData.name.length) {
      formIsValid = false;
      errors['name'] = `First & Last Name can't be empty`;
    }
    if (!formData.email.length) {
      formIsValid = false;
      errors['email'] = `Email can't be empty`;
    }
    if (formData.email.length) {
      let emailValid = formData.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      if (!emailValid) {
        formIsValid = false;
        errors['email'] = `Email is invalid`;
      }
    }
    if (!formData.password.length) {
      formIsValid = false;
      errors['password'] = `Password can't be empty`;
    }
    if (formData.password.length) {
      let passvalue = formData.password;
      let passwordValid = passvalue.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,99}$/);
      if (!passwordValid) {
        formIsValid = false;
        errors['password'] =
          'Password must be minimum of 8 characters, contain a capital letter, and a numeric digit';
      }
    }
    if (!formData.confirmPassword.length) {
      formIsValid = false;
      errors['confirmPassword'] = `Confirm Password can't be empty`;
    }
    if (formData.confirmPassword.length) {
      let confirmvalue = formData.confirmPassword;
      let confirmvalid = confirmvalue === formData.password;
      if (!confirmvalid) {
        formIsValid = false;
        errors['confirmPassword'] = 'Password does not match';
      }
    }

    setFormData({ ...formData, errors: errors });
    return formIsValid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      setFormData({ ...formData, loading: true });
      const { name, email, password } = formData;
      console.log(formData, "formData11")
      const payload = { name, password, email };
      let res = await registerUser(payload);
      setFormData({ ...formData, loading: false });
      if (res) {
        history('/login');
      }
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-main">
        <header>Signup</header>
        <form className="signup-form">
          <div className="name">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleUserInput}
              placeholder="First & Last Name"
            />
            {formData.errors.name && (
              <div className="error-label">
                {' '}
                {formData.errors.name}
              </div>
            )}
          </div>
          <div className="email">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleUserInput}
              placeholder="Email"
            />
            {formData.errors.email && (
              <div className="error-label">
                {' '}
                {formData.errors.email}
              </div>
            )}
          </div>
          <br />
          <div className="password">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleUserInput}
              placeholder="Create Password"
            />
            {formData.errors.password && (
              <div className="error-label">
                {' '}
                {formData.errors.password}
              </div>
            )}
          </div>
          <br />
          <div className="cp">
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleUserInput}
              placeholder="Confirm Password"
            />
            {formData.errors.confirmPassword && (
              <div className="error-label">
                {' '}
                {formData.errors.confirmPassword}
              </div>
            )}
            <i className="bx bx-hide eye-icon"></i>
          </div>
          <br />
          <div className="button">
            <input type="button" onClick={handleSubmit}
              value="Signup"
            />
          </div>
        </form>
        <div className="login">
          <span>
            Already have an account? <NavLink to="/login">Login</NavLink>
          </span>
        </div>
        {/* <div className="signup-line"></div> */}
        {/* <div className="facebook">
          <a href="#">
            <i className="bx bxl-facebook facebook-icon"></i>
            <span>Login with Facebook</span>
          </a>
        </div>
        <div className="google">
          <a href="#">
            <img src={GoogleImg} alt="google" />
            <span>Login with Google</span>
          </a>
        </div> */}
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  registerUser,
};
export default connect(
  '',
  mapDispatchToProps
)(SignUp);
