import { USER } from '../constants';

const userReducer = (state= null, action) => {
  if(action.type == USER.LOGIN_SUCCESS){
    console.log('USER LOGIN SUCCESS userReducer');
    console.log('STATE', state);
    console.log('USER', action.user);
    console.log(action.user);
    return action.user;
  }
  return state;
}

export default userReducer;