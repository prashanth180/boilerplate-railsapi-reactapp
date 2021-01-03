import { USER } from "../constants";

const errorReducer = (state= null, action) =>{
  switch(action.type){
    case USER.LOGIN_FAIL:
      return action.error;
    case USER.LOGIN:
    case USER.LOGIN_SUCCESS:
      return null;
    default:
      return state;
  }
};

export default errorReducer;