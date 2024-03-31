import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

export const Item = (props) => {
  return (
    <div className="item">
      {/* Link to the product details page */}
      <Link to={`/product/${props.id}`}>
        {/* Clicking the image scrolls to the top of the page */}
        <img
          onClick={() => window.scrollTo(0, 0)}
          src={props.image}
          alt={props.name}
        />
      </Link>
      <p>{props.name}</p>
      <div className="item-prices">
        {/* Display the new price */}
        <div className="item-price-new">${props.new_price}</div>
        {/* Display the old price, if available */}
        {props.old_price && (
          <div className="item-price-old">${props.old_price}</div>
        )}
      </div>
    </div>
  );
};
