import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, register} from './operations';

const initialState = {
    user: { id: null, name: null,},
    accessToken: null,
    refreshToken: null,
    isLoggedIn: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [register.fulfilled](state, action) {
            console.log(action.payload);
            state.user.id = action.payload._id;
            state.user.name = action.payload.name;
            state.accessToken = action.payload.token;
        },
        [logIn.fulfilled](state, action) {
            state.user.id = action.payload._id;
            state.user.name = action.payload.name;
            state.accessToken = action.payload.token;
            state.isLoggedIn = true;
        },
        [register.rejected](state, action) {
            console.log(action.payload);
        },
        [logIn.rejected](state, action) {
            console.log(action.payload);
        },
        [logOut.fulfilled](state, action) {
            state.user = { id: null, name: null, };
            state.accessToken = null;
            state.refreshToken = null;
            state.isLoggedIn = false;
        },
    },
});

export const authReducer = authSlice.reducer;