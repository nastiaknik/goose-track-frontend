export const selectUser = (state) => state.auth.user;
export const selectAccessToken = (state) => state.auth.isLoggedIn;
export const selectIsLoggedIn = (state) => state.auth.accessToken;
export const selectIsUserLoading = (state) => state.auth.isLoading;
export const selectUserError = (state) => state.auth.error;
// export const selectIsRefreshingUser = (state) => state.auth.isRefreshingUser;
