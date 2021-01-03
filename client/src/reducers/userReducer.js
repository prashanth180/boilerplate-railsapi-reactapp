import { USER } from '../constants';

const userReducer = (state= [], action) => {
  if(action.type == USER.LOGIN_SUCCESS){
    return [...state, ...action.user];
  }
  return state;
}

export default userReducer;