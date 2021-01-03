import { ITEMS } from "../constants";

const itemsReducer = (state=[], action) =>{
  switch(action.type){
    case ITEMS.LOAD_SUCCESS:
      console.log("items REducer", state, action);
      return [...state, ...action.items];
    case ITEMS.ADD_SUCCESS:
      console.log("ITEMS ADD REducer", state, action);
      return [...state, action.items];
  }
  return state;
};

export default itemsReducer;