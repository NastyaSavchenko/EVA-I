import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, register, forgotPassword, resetPassword, refreshUser, googleAuth, waitList } from './operations';

const initialState = {
  user: { id: null, name: null },
  accessToken: null,
  refreshToken: null,
  isLoggedIn: false,
  isVerify: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user.id = action.payload._id;
        state.user.name = action.payload.email;
        state.accessToken = action.payload.accessToken;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state, action) => {
        console.log(action.payload);
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user.id = action.payload._id;
        state.user.name = action.payload.email;
        state.accessToken = action.payload.accessToken;
        state.isVerify = action.payload.verify;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, (state, action) => {
        console.log(action.payload);
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = { id: null, name: null };
        state.accessToken = null;
        state.isLoggedIn = false;
      })
      .addCase(forgotPassword.fulfilled, (state) => {
        state.accessToken = null;
        state.isLoggedIn = false;
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        console.log(action.payload);
      })
      .addCase(resetPassword.fulfilled, (state) => {
        state.accessToken = null;
        state.isLoggedIn = false;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        console.log(action.payload);
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.refreshToken = false;
        state.isLoggedIn = true;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        console.log(action.payload);
      })
      .addCase(googleAuth.fulfilled, (state, action) => {
        state.user.id = action.payload._id;
        state.user.name = action.payload.email;
        state.accessToken = action.payload.accessToken;
        state.isLoggedIn = true;
      })
      .addCase(googleAuth.rejected, (state, action) => {
        console.log(action.payload);
      })
      .addCase(waitList.fulfilled, (state, action) => {
        console.log(action.payload);
      })
      .addCase(waitList.rejected, (state, action) => {
        console.log(action.payload);
      });
  },
});

export const authReducer = authSlice.reducer;