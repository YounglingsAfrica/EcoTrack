import { createSlice } from "@reduxjs/toolkit";

const addressesSlice = createSlice({
    name: 'addresses',
    initialState: {
        streetDetails: '',
        province: '',
        country: '',
    },
    reducers: {
        setAddress: (state, action) => {
            return action.payload;
        },
    },
});

export const { setAddress } = addressesSlice.actions;

export default addressesSlice.reducer; 