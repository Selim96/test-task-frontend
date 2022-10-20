import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";


const herosReduser = createReducer({heros: [], dataLength: 0}, {

});


export default combineReducers({
    allHeros: herosReduser,
    
});