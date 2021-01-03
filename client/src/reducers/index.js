import { combineReducers } from 'redux';

import loginReducer from "./loginReducer";
import userReducer from "./userReducer";
import errorReducer from "./errorReducer";
import itemsReducer from "./itemsReducer";

const rootReducer = combineReducers({
  isLogin: loginReducer,
  user: userReducer,
  error: errorReducer,
  items: itemsReducer,
});

export default rootReducer;