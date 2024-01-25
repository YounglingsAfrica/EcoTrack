import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./auth/authService";

const store = configureStore({
    reducer: rootReducer,

}); 

export default store;