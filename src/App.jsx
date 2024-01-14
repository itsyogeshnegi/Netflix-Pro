import React from 'react'
import './App.css'
import HomePage from './Pages/homePage/HomePage'
import Cart from "./Pages/Cart/Cart";
import Fav from './Pages/Fav/Fav';
import { Route, Routes, BrowserRouter, Link } from "react-router-dom";
import { Provider } from "react-redux";
import Store from './Store/Store';
function App() {
  return (
    <>
      <Provider store={Store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path='/favourite' element={<Fav/>} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App
