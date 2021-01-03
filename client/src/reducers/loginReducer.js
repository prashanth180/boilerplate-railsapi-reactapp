import { USER } from "../constants";

const loginReducer = (state= false, action) =>{
  switch(action.type){
    case USER.LOGIN:
      return true;
    case USER.LOGIN_SUCCESS:
      return false;
    case USER.LOGIN_FAIL:
      return false;
    default:
      return state;
  }
};

export default loginReducer;