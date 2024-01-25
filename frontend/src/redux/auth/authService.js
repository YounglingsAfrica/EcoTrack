import { combineReducers } from "@reduxjs/toolkit";
import userReducer from './authSlice';

const rootReducer = combineReducers({
    user: userReducer,

});

export default rootReducer;