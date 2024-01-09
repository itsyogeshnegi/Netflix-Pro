import React, {useState} from 'react'
import './NavBar.css'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
const NavBar = () => {
  const [show, handleShow] = useState(false);
  const cartCount = useSelector((state) => state.cart);
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
        {/* <i
          style={{ color: "white", fontSize: "20px" }}
          class="fa-solid fa-magnifying-glass"></i> */}
        {/* <div className="carts">
          <Link>
            <div className="lengthCart">{cartCount.length}</div>
            <i
              style={{ color: "white", fontSize: "20px" }}
              class="fa-regular fa-heart"></i>
          </Link>
        </div> */}

        <div className="carts">
          <Link to="/Cart">
            <div className="lengthCart">{cartCount.length}</div>
            <i
              class="fa-solid fa-cart-shopping"
              style={{ color: "white", fontSize: "20px" }}></i>
          </Link>
        </div>

        <img src="/user.png" height="90%" />
      </div>
    </div>
  );
};

export default NavBar