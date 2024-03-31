import React from "react";
import { CartItems } from "../Components/CartItems/CartItems";
import { ShopContext } from "../Context/ShopContext";

export const Cart = () => {
  return (
    <ShopContext.Consumer>
      {(context) => (
        <div>
          <CartItems />
        </div>
      )}
    </ShopContext.Consumer>
  );
};
