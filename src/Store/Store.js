import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'
import favReducer from "./favSlice";


const Store = configureStore({
    reducer : {
        cart : cartReducer,
        fav : favReducer
    }
});

export default Store;