import axios from 'axios';

const fetchItems = async () =>{
  const response = await axios.get('/api/v1/lists.json');
  console.log('RESPONSEEEE', response);
  console.log("FETCH ITEMS", response.data);
  if (response.status >= 400){
    console.log("IN FETCH ITEMS ERRORS");
    throw new Error(response.errors)
  }
  console.log("IN RETURN DATA", response.data);
  return response.data;
}

const postItems = async (title, excerpt) => {
  const response = await axios.post( '/api/v1/lists', { list: {title, excerpt} })
  console.log('RESPONSEEEE', response);
  console.log("POST ITEMS", response.data);
  if (response.status >= 400){
    console.log("IN POST ITEMS ERRORS");
    throw new Error(response.errors)
  }
  console.log("IN RETURN DATA", response.data);
  return response.data;
}

const deleteItems = async (id) => {
  console.log('IN DELETE ITEMS');
  const response = await axios.delete( '/api/v1/lists/' + id )
  console.log('RESPONSEEEE', response);
  console.log("DELETE ITEMS", response.data);
  if (response.status >= 400){
    console.log("IN DELETE ITEMS ERRORS");
    throw new Error(response.errors)
  }
  console.log("IN RETURN DATA", response.data);
  return response.data;
}

const loginUser = async (user) => {
  console.log('IN Login USER', user);
  
  const response = await axios.post('/api/v1/login', {user}, {withCredentials: true})
  console.log('RESPONSEEEE', response);
  console.log("LOGIN USER", response.data);
  if (response.status >= 400){
    console.log("IN LOGIN USER ERRORS");
    throw new Error(response.errors)
  }
  console.log("IN LOGIN USER RETURN DATA ", response.data);
  return response.data.user;
}

export { fetchItems, postItems, deleteItems, loginUser }