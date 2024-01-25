import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLoading: false,
        data: {
            name: '',
            email: '',
            password: '',
        },
        error: null,    
    },
    reducers: {
        setIsLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setData: (state, action) => {
            state.data = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        logoutUser: (state) => {
            state.isLoading = true;
            state.user = null;
            state.error = null;
        },
        logoutUserSuccess: (state) => {
            state.isLoading = false;
        },
        logoutUserFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export const { 
    setIsLoading, 
    setData, 
    setError,
    logoutUser,
    logoutUserSuccess,
    logoutUserFailure,
} = userSlice.actions;

export default userSlice.reducer;