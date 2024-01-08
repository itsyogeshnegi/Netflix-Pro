import React from "react";
import "./Cart.css";
import OtherNavBar from "../../Component/OtherNavBar/OtherNavBar";
import { useSelector } from "react-redux";
const Cart = () => {
  const products = useSelector(state => state.cart);
  var baseURL = "https://image.tmdb.org/t/p/original";
  return (
    <div className="Cart">
      <OtherNavBar />
      <div className="Cart_box">
        {products.map(products => (
          <div className="cart_Movies">
            <img src={baseURL + products.poster_path} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
