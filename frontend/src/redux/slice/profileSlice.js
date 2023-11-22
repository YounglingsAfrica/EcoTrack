import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserProfile = createAsyncThunk(
    "profile/fetchUserProfile",
    async () => {
        const profileRes = await axios.get('/profile', { withCredentials: true });
        const avatarRes = await axios.get(`/avatar/${profileRes.data._id}`, { withCredentials: true }); 
        return { ...profileRes.data, avatar: avatarRes.request.responseUrl };
    }
);

export const updateUserProfile = createAsyncThunk(
    "profile/updateUserProfile",
    async (updatedFields) => {
        const response = await axios.put('/profile', updatedFields, { withCredentials: true });
        const { data } = response;

        if (updatedFields.avatar) {
            const avatarRes = await axios.get(`/avatar/${data._id}`, { withCredentials: true });
            data.avatar = avatarRes.request.requestUrl;
        }

        return data;
    }
);

const profileSlice = createSlice({
    name: "profile",
    initialState: { user: null, status: 'idle', error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserProfile.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchUserProfile.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload;
            })
            .addCase(fetchUserProfile.rejected, (state, action) => {
                state.status = 'failed';
                state.user = action.error.message;
            })
            .addCase(updateUserProfile.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(updateUserProfile.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload;
            })
            .addCase(updateUserProfile.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    } 
});

export const selectUserProfile = state => state.profile.user;

export default profileSlice.reducer;