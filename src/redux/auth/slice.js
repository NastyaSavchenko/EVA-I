import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, register } from './operations';

const initialState = {
  user: { id: null, name: null },
  accessToken: null,
  refreshToken: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        console.log(action.payload);
        state.user.id = action.payload._id;
        state.user.name = action.payload.name;
        state.accessToken = action.payload.token;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user.id = action.payload._id;
        state.user.name = action.payload.name;
        state.accessToken = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state, action) => {
        console.log(action.payload);
      })
      .addCase(logIn.rejected, (state, action) => {
        console.log(action.payload);
      })
      .addCase(logOut.fulfilled, (state, action) => {
        state.user = { id: null, name: null };
        state.accessToken = null;
        state.refreshToken = null;
        state.isLoggedIn = false;
      });
  },
});

export const authReducer = authSlice.reducer;
