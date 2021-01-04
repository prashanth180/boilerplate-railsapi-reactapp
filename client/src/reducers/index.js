import { combineReducers } from 'redux';

import userReducer from "./userReducer";
import errorReducer from "./errorReducer";
import itemsReducer from "./itemsReducer";

const rootReducer = combineReducers({
  user: userReducer,
  error: errorReducer,
  items: itemsReducer,
});

export default rootReducer;