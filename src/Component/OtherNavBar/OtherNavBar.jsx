import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./OtherNavBar.css";
import { useSelector } from 'react-redux';
const OtherNavBar = () => {
  const cartCount = useSelector((state) => state.cart);
  const favCount = useSelector(state => state.fav);
  return (
    <div className={`nav_logos`}>
      <div className="Logonetflix">
        <Link to="/">
          <img src="/Logonetflix.png" height="90%" />
        </Link>
      </div>
      <div className="LogOutButton">
      <Link to="/favourite">
            <button data-count={favCount.length} className="listBtn">
            <i
              style={{ color: "white", fontSize: "20px" }}
              class="fa-regular fa-heart"></i>
            </button>
          </Link>
          <Link to="/Cart">
            <button data-count={cartCount.length} className="listBtn">
              <i
                class="fa-solid fa-cart-shopping"
                style={{ color: "white", fontSize: "20px" }}></i>
            </button>
          </Link>
        <img src="/user.png" height="90%" />
      </div>
    </div>
  );
};

export default OtherNavBar;
