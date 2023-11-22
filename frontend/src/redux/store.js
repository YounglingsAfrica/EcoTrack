import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./slice/profileSlice";
import userReducer from "./slice/logoutSlice";
import addressesReducer from "./slice/addressesSlice";

export const store = configureStore({
    reducer: {
        profile: profileReducer,
        user: userReducer,
        address: addressesReducer,
    }
});