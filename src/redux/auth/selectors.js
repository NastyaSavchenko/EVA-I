export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectIsVerify = state => state.auth.isVerify;

export const selectUser = state => state.auth.user;

export const selectUserName = state => state.auth.user.name;

export const selectRefreshToken = state => state.auth.refreshToken;

export const selectAccessToken = state => state.auth.accessToken;