import { ITEMS, USER, COMMON } from '../constants';

const userLogin = () => ({
  type: USER.LOGIN,
});

const setUser = user => ({
  type: USER.LOGIN_SUCCESS,
  user,
})

const setError = error => ({
  type: COMMON.ERROR,
  error,
})

const userLogout = () => ({
  type: USER.LOGOUT,
});

const unSetUser = user => ({
  type: USER.LOGOUT_SUCCESS,
  user: null,
})


const loadItems = () => ({
  type: ITEMS.LOAD,
})

const setItems = items => ({
  type: ITEMS.LOAD_SUCCESS,
  items,
})

const addItems = (title, excerpt) => ({
  type: ITEMS.ADD,
  title,
  excerpt
})
const addItemsSuccess = items => ({
  type: ITEMS.ADD_SUCCESS,
  items,
})

export { userLogin, setUser, userLogout, unSetUser, loadItems, setItems, addItems, addItemsSuccess, setError}