import React, { Fragment, useState } from "react";
import "./Login.css";
import { connect } from 'react-redux';
import { NavLink, useNavigate } from "react-router-dom";
import { login } from './store/auth.action';

const Login = ({login}) => {
  const history = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
    if (!formData.email.length) {
      formIsValid = false;
      errors["email"] = `Email can't be empty`;
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
    if (!formData.password.length) {
      formIsValid = false;
      errors["password"] = `Password can't be empty`;
    }

    setFormData({ ...formData, errors: errors });
    return formIsValid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      setFormData({ ...formData, loading: true });
      const { email, password } = formData;
      console.log(email, password)
      const doc = await login(email.toLowerCase(), password);
      setFormData({ ...formData, loading: false });
      if(doc && doc.success){
        history('/')
      }
    }
  };

  return (
    <Fragment>
      <div className="login-container">
        <div className="login-main">
          <header>Login</header>
          <form className="login-form">
            <div className="email">
              <input type="email" name="email" onChange={handleUserInput} placeholder="Email" />
            </div>
            {formData.errors.email && (
              <div className="error-label">
                {' '}
                {formData.errors.email}
              </div>
            )}
            <br />
            <div className="password">
              <input type="password" name="password" onChange={handleUserInput} placeholder="Password" />
              <i className="bx bx-hide eye-icon"></i>
            </div>
            {formData.errors.password && (
              <div className="error-label">
                {' '}
                {formData.errors.password}
              </div>
            )}
            <br />
            <div className="fp">
              <a href="#">Forgot password?</a>
            </div>
            <br />
            <div className="button">
              <input type="button" onClick={handleSubmit} value="Login"/> <a href={'<FontAwesomeIcon icon="fa-solid fa-user" />'}> </a> 
            </div>
          </form>
          <div className="signup">
            <span>
              Don't have an account? <NavLink to="/signup">Signup</NavLink>
            </span>
          </div>
          {/* <div className="login_line"></div>
          <div className="facebook">
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
      {/* <Footer /> */}
    </Fragment>
  );
};

const mapDispatchToProps = {
  login,
};
export default connect(
  '',
  mapDispatchToProps
)(Login);
