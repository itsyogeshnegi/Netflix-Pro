import React from "react";
import "./Cart.css";
import OtherNavBar from "../../Component/OtherNavBar/OtherNavBar";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeCart } from "../../Store/cartSlice";
const Cart = () => {
  const products = useSelector(state => state.cart);
  var baseURL = "https://image.tmdb.org/t/p/original";
  const cartCount = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const remove = cart => {
    dispatch(removeCart(cart));
  };

  return (
    <div className="Cart">
      <OtherNavBar />
      <div className="cartCount">
      <h5 style={{color:"white" , marginLeft:"10px"}}>Total Cart : {cartCount.length}</h5>
      </div>
      <div className="Cart_box">
        {products.map((product , index) => (
          <div className="cart_Movies">
            <img src={baseURL + product.poster_path} />
            <button
              className="removeItem"
              onClick={() => remove(product.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
