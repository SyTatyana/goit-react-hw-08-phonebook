const getUserName = state => state.auth.user.name;
const getIsLoggedIn = state => state.auth.isLoggedIn;
const getIsFetchCurrentUser = state => state.auth.isFetchCurrentUser;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getIsFetchCurrentUser,
};

export default authSelectors;
