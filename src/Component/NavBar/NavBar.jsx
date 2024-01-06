import React, {useState} from 'react'
import './NavBar.css'
const NavBar = () => {
  const [show, handleShow] = useState(false);
  const [userDropdownVisible, setUserDropdownVisible] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else handleShow(false);
  });

  return (
    <div className={`nav_logo ${show && "nav__bar__shadow"}`}>
      <div className="Logonetflix">
        <img src="/Logonetflix.png" height="90%" />
        <div className='navHeads'>
          <p>Home</p>
          <p>Tv Show</p>
          <p>Movies</p>
          <p>My Favourite</p>
        </div>
      </div>
      <div className="LogOutButton">
        <i
          style={{ color: "white", fontSize: "24px" }}
          class="fa-solid fa-magnifying-glass"></i>
        <i
          class="fa-solid fa-cart-shopping"
          style={{ color: "white", fontSize: "24px" }}></i>
        <img src="/user.png" height="90%" />
      </div>
    </div>
  );
}

export default NavBar