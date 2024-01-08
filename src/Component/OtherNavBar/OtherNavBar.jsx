import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./OtherNavBar.css";
const OtherNavBar = () => {
  return (
    <div className={`nav_logos`}>
      <div className="Logonetflix">
        <Link to="/">
          <img src="/Logonetflix.png" height="90%" />
        </Link>
      </div>
      <div className="LogOutButton">
        <i
          style={{ color: "white", fontSize: "24px" }}
          class="fa-solid fa-magnifying-glass"></i>
        <i
          style={{ color: "white", fontSize: "24px" }}
          class="fa-regular fa-heart"></i>
        <Link to="/Cart">
          <i
            class="fa-solid fa-cart-shopping"
            style={{ color: "white", fontSize: "24px" }}></i>
        </Link>
        <img src="/user.png" height="90%" />
      </div>
    </div>
  );
};

export default OtherNavBar;
