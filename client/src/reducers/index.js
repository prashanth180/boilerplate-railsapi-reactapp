import { combineReducers } from 'redux';

import loginReducer from "./loginReducer";
import userReducer from "./userReducer";
import errorReducer from "./errorReducer";

const rootReducer = combineReducers({
  isLogin: loginReducer,
  user: userReducer,
  error: errorReducer,
});

export default rootReducer;