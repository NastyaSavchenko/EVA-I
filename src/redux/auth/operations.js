import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://aibot-back-end.onrender.com/';

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk('auth/register', async (credentials, thunkAPI) => {
  try {
    const res = await axios.post('/api/auth/register', credentials);
    setAuthHeader(res.data.token);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

export const logIn = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const res = await axios.post('/api/auth/login', credentials);
    setAuthHeader(res.data.token);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.get('/api/auth/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

export const verificationCode = createAsyncThunk('auth/verify', async (verificationCode, thunkAPI) => {
  try {
    await axios.get(`/api/auth/verify/${verificationCode}`);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

export const forgotPassword = createAsyncThunk('auth/forgot-password', async (credentials, thunkAPI) => {
  try {
    const res = await axios.post('/api/auth/forgot-password', credentials);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

export const resetPassword = createAsyncThunk('auth/reset-password', async (credentials, thunkAPI) => {
  try {
    const res = await axios.post(`/api/auth/reset-password/${credentials.resetPasswordToken}`, credentials);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.accessToken;

  if (!persistedToken) {
    return thunkAPI.rejectWithValue('Unable to fetch user');
  }

  try {
    setAuthHeader(persistedToken);
    const res = await axios.get('/api/auth/current');
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

export const googleAuth = createAsyncThunk('auth/googleAuth', async (_, thunkAPI) => {
  try {
    const res = await axios.get('api/auth/google');
    setAuthHeader(res.data.token);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

export const waitList = createAsyncThunk('auth/waitlist/add', async (credentials, thunkAPI) => {
  try {
    const res = await axios.post(`api/waitlist/add`, credentials);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});