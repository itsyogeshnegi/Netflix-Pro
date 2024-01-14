import React from 'react'
import './Fav.css'
import OtherNavBar from "../../Component/OtherNavBar/OtherNavBar";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeFav } from '../../Store/favSlice';
const Fav = () => {
  const products = useSelector(state => state.fav);
  var baseURL = "https://image.tmdb.org/t/p/original";
  const cartCount = useSelector((state) => state.fav);
  const dispatch = useDispatch();

  const remove = cart => {
    dispatch(removeFav(cart));
  };
  return (
    <div>
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

    </div>
  )
}

export default Fav