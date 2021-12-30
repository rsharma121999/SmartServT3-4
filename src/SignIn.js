/* eslint-disable no-useless-escape */
import React, { useState } from 'react';
import './SignInStyles.css';
import { Navigate } from 'react-router-dom';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');
  var regex = /[&\/\\^!`~;#,+(|)$~%-.'":*?<>{}]/g;
  const validateForm = () => {
    let error = '';
    let emailError = '';
    let correctPassword = 'SmartServTask@123';
    let correctmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(correctmail)) {
      emailError = 'Invalid Email Format.';
    }

    if (!password.match(/[A-Z]/g)) {
      error = 'Password should have atleast 1 Uppercase Letter.';
    }
    if (!password.match(/[0-9]/g)) {
      error = 'Password should have atleast 1 Number.';
    }
    if (!password.match(correctPassword)) {
      error = 'Wrong Password! Please try again.';
    }
    if (password.match(regex)) {
      error = 'No Special Characters Allowed expect @.';
    }
    if (password.length < 5) {
      error = 'Password Should be atleast 5 characters.';
    }
    if (error || emailError) {
      setPasswordError(error);
      setEmailError(emailError);
      return false;
    }
    return true;
  };

  const submitForm = e => {
    e.preventDefault();
    const isValid = validateForm();
    console.log('isValid', isValid);
    if (isValid) {
      setRedirect(true);
    } else {
      console.log('error', passwordError);
    }
  };

  const forgotPassword = email => {
    window.open(
      `mailto:${email}?subject=Forgot Password&body=Hello, I forgot my password.`
    );
  };

  if (redirect) {
    return <Navigate to={`/dashboard`} />;
  }

  return (
    <div className="Background">
      <div className="box">
        <div className="container">
          <div className="Form">
            <form>
              <img src={'Logo.jpeg'} width={300} alt="logo"></img>
              <div className="inputBox">
                <input
                  required
                  type="email"
                  name="emailID"
                  placeholder="Email ID"
                  onChange={e => setEmail(e.target.value)}
                ></input>
                <div
                  style={{
                    color: 'red',
                    textAlign: 'center',
                    marginTop: '5px',
                  }}
                >
                  {emailError}
                </div>
              </div>
              <div className="inputBox">
                <input
                  required
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={e => setPassword(e.target.value)}
                ></input>
                <div
                  style={{
                    color: 'red',
                    textAlign: 'center',
                    marginTop: '5px',
                  }}
                >
                  {passwordError}
                </div>
              </div>
              <div className="inputBox">
                <button type="submit" onClick={submitForm} className="btn mb-2">
                  Login
                </button>
              </div>
              <div className="inputBox">
                <p
                  to="/register"
                  onClick={() => forgotPassword('support@smartserv.io')}
                >
                  Forgot Your Password?
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
