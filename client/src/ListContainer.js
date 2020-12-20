import React, { useEffect, useState } from 'react'
import axios from 'axios';
import List from './List';
import EditListForm from './EditListForm';
import NewListForm from './NewListForm';

function ListContainer() {
  const [lists, setLists] = useState([]);
  const [editingListId, setEditingListId] = useState();
  
  useEffect(() =>{
    axios.get('http://localhost:3001/api/v1/lists.json')
        .then(response => {
            console.log(response)
            setLists(response.data)
        })
        .catch(error => console.log(error))
  },[])
  console.log(lists);

  const removeList = (id) => {
    axios.delete( 'http://localhost:3001/api/v1/lists/' + id )
    .then((response) => {
        const filtered_lists = lists.filter(
            list => list.id !== id
        )
        console.log(filtered_lists);
        setLists(filtered_lists)
        console.log("🦅 ");
        console.log(lists)
    })
    .catch(error => console.log(error))
  }

  const editList= (id, title, excerpt) => {
    axios.put( 'http://localhost:3001/api/v1/lists/' + id, { 
        list: {
            title, 
            excerpt
        } 
    })
    .then(response => {
        console.log(response);
        const lists = lists;
        lists[id-1] = {id, title, excerpt}
        setLists(lists);
        setEditingListId(null);
    })
    .catch(error => console.log(error));
  }

  const addNewList=(title, excerpt) =>{
    axios.post( 'http://localhost:3001/api/v1/lists', { list: {title, excerpt} })
    .then(response => {
        console.log(response)
        
        setLists([ ...lists, response.data ])
    })
    .catch(error => {
        console.log(error)
    })
  }

  return (
    <div className="listContainer">
      <h1>LISTS</h1>
      {lists.map( (list) => editingListId === list.id ? (
          <EditListForm list={list} key={list.id} editList={editList}/>
        ):(
          <List list={list} key={list.id} onRemoveList={removeList}/>
        )
      )}
      <NewListForm onNewList={addNewList} />
      <br/>
    </div>
  )
}

export default ListContainer
