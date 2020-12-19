import React, { useEffect, useState } from 'react'
import axios from 'axios';
import List from './List';

function ListContainer() {
  const [lists, setLists] = useState([]);
  useEffect(() =>{
    axios.get('http://localhost:3001/api/v1/lists.json')
        .then(response => {
            console.log(response)
            setLists(response.data)
        })
        .catch(error => console.log(error))
  },[])
  console.log(lists);

  return (
    <div className="listContainer">
      <h1>LISTS</h1>
      {lists.map( (list) => (
        <List list={list} key={list.id} />
      ))}
    </div>
  )
}

export default ListContainer
