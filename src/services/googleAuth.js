import axios from 'axios';

const URL = 'https://aibot-back-end.onrender.com/';

export const api = axios.create({
  baseURL: URL,
});

export const googleAuth = () => {
    const response = api.get('auth/google');
    return response;
  };

 