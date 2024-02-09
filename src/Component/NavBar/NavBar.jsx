import React, {useState} from 'react'
import './NavBar.css'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
const NavBar = () => {
  const [show, handleShow] = useState(false);
  const cartCount = useSelector((state) => state.cart);
  const favCount = useSelector(state => state.fav);
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else handleShow(false);
  });

  return (
    <div className={`nav_logo ${show && "nav__bar__shadow"}`}>
      <div className="Logonetflix">
        {/* <Link to="/"> */}
        <img src="/Logonetflix.png" height="90%" />
        {/* </Link> */}
      </div>
      <div className="LogOutButton">
        {/* <div className="carts">
          <Link to="/Search-More-Movies">
            <i
              style={{ color: "white", fontSize: "20px" }}
              class="fa-solid fa-magnifying-glass"></i>
          </Link>
        </div> */}
        <div className="carts">
          <Link to="/favourite">
            <button data-count={favCount.length} className="listBtn">
              <i
                style={{ color: "white", fontSize: "20px" }}
                class="fa-regular fa-heart"></i>
            </button>
          </Link>
        </div>

        <div className="carts">
          <Link to="/Cart">
            <button data-count={cartCount.length} className="listBtn">
              <i
                class="fa-solid fa-cart-shopping"
                style={{ color: "white", fontSize: "20px" }}></i>
            </button>
          </Link>
        </div>

        <img src="/user.png" height="90%" />
      </div>
    </div>
  );
};

export default NavBar