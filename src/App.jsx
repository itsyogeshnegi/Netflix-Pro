import React from 'react'
import './App.css'
import HomePage from './Pages/homePage/HomePage'
import Cart from "./Pages/Cart/Cart";
import Fav from './Pages/Fav/Fav';
import LogIn from './Pages/LogInPage/LogIn';
import SignUp from './Pages/SignUpPage/SignUp';
// import SearchMore from "./Pages/SearchMore/SearchMore";
import { Route, Routes, BrowserRouter, Link } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./Store/Store";
function App() {
  return (
    <>
      <Provider store={Store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LogIn />} />
            <Route path="/Sign-Up" element={<SignUp />} />
            <Route path="/Home-Page" element={<HomePage />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/favourite" element={<Fav />} />
            {/* <Route path="/Search-More-Movies" element={<SearchMore />} /> */}
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App
