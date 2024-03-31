import React from "react";
import "./NewsLetter.css";
export const NewsLetter = () => {
  return (
    <div className="newsletter">
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newLetter and Stay Updated</p>
      <div>
        <input type="email" placeholder="Your Email Id" name="" id="" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};
