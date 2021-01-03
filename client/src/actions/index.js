import { USER } from '../constants';

const userLogin = () => ({
  type: USER.LOGIN,
});

const setUser = user => ({
  type: USER.LOGIN_SUCCESS,
  user,
})

const setLoginError = error => ({
  type: USER.LOGIN_FAIL,
  error,
})

const userLogout = () => ({
  type: USER.LOGOUT,
});

const unSetUser = user => ({
  type: USER.LOGOUT_SUCCESS,
  user: null,
})

const setLogoutError = error => ({
  type: USER.LOGOUT_FAIL,
  error,
})

export { userLogin, setUser, setLoginError, userLogout, unSetUser, setLogoutError}