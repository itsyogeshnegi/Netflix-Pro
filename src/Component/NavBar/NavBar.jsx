import React, {useState} from 'react'
import './NavBar.css'
const NavBar = () => {
  const [show, handleShow] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        handleShow(true);
    } else handleShow(false);
});

  return (
    <div className={`nav_logo ${show && "nav__bar__shadow"}`}>
        <div className='Logonetflix'>
            <img src='/Logonetflix.png' height="90%"/>
        </div>
        <div className='LogOutButton'>
         <img src='/user.png' height="90%"/>
        </div>
    </div>
  )
}

export default NavBar