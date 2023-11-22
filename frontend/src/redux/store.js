import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import profileReducer from "./slice/profileSlice";
import userReducer from "./slice/logoutSlice";
import addressesReducer from "./slice/addressesSlice";

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = {
    profile: profileReducer,
    user: userReducer,
    address: addressesReducer,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);