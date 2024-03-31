import React from "react";
import "./CSS/LoginSignup.css";
export const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="Your Email Address" />
          <input type="text" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already have account? <span>Login here</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the term of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};
