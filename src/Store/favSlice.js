import { createSlice } from "@reduxjs/toolkit";

const favSlice = createSlice({
    name: "fav",
    initialState : [],

    reducers:{
        addFav(state , action){
            state.push(action.payload)
        },
        removeFav(state , action){
            return state.filter((item) => item.id !== action.payload);
        },        
    }
});

export const {addFav , removeFav } = favSlice.actions;

export default favSlice.reducer;