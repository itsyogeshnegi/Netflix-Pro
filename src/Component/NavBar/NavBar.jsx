import React, {useState} from 'react'
import './NavBar.css'
import { Link } from "react-router-dom";
const NavBar = () => {
  const [show, handleShow] = useState(false);
  
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else handleShow(false);
  });

  return (
    <div className={`nav_logo ${show && "nav__bar__shadow"}`}>
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

export default NavBar