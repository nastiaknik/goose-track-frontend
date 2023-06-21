export const selectIsLoggedIn = ({ auth }) => auth.isLoggedIn;

export const selectUser = ({ auth }) => auth.user;

export const selectIsLoading = ({ auth }) => auth.isLoading;

export const selectToken = ({ auth }) => auth.token;

export const selectIsRefreshing = ({ auth }) => auth.isRefreshing;
