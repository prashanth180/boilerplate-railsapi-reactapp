import { ITEMS } from "../constants";

const itemsReducer = (state=[], action) =>{
  switch(action.type){
    case ITEMS.LOAD_SUCCESS:
      console.log("items REducer", state, action);
      return [...state, ...action.items];
    case ITEMS.ADD_SUCCESS:
      console.log("ITEMS ADD REducer", state, action);
      return [...state, action.items];
    case ITEMS.DELETE_SUCCESS:
      console.log("ITEMS DELETE REducer", state, action);
      const filtered_lists = state.filter(
        list => list.id !== action.id
      )
      console.log('FILTERED LISTS', filtered_lists);
      console.log([...filtered_lists]);
      return [...filtered_lists];
  }
  return state;
};

export default itemsReducer;