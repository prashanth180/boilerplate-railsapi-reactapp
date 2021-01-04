import React, { useEffect, useState } from 'react'
import List from './List';
import EditListForm from './EditListForm';
import NewListForm from './NewListForm';
import {connect} from 'react-redux'; 
import {loadItems, addItems, deleteItems} from  './actions';
import axios from 'axios';
import { useHistory } from "react-router-dom";

function ListContainer(props) {
  const [lists, setLists] = useState([]);
  const [editingListId, setEditingListId] = useState();
  const { items, error } = props
  let history = useHistory();

  useEffect(() =>{
    console.log("LOADDDD ITEMS");
    if(props.user){
      props.loadItems()
    }else{
      history.push('/login')
    }
    
  },[])
  console.log(lists);

  const removeList = (id) => {
    console.log("IN REMOVE LIST", id);
    props.deleteItems(id);
    // axios.delete( '/api/v1/lists/' + id )
    // .then((response) => {
    //     const filtered_lists = lists.filter(
    //         list => list.id !== id
    //     )
    //     console.log(filtered_lists);
    //     setLists(filtered_lists)
    //     console.log("🦅 ");
    //     console.log(lists)
    // })
    // .catch(error => console.log(error))
  }

  const editList= (id, title, excerpt) => {
    axios.put( '/api/v1/lists/' + id, { 
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
    console.log('IN ADD NEW ITEM');
    props.addItems(title, excerpt);
  }

  return (
    <div className="listContainer">
      <h1>LISTS</h1>
      {items.map( (list) => editingListId === list.id ? (
          <EditListForm list={list} key={list.id} editList={editList}/>
        ):(
          <List list={list} key={list.id} onRemoveList={removeList}/>
        )
      )}
      <NewListForm onNewList={addNewList} />
      <br/>
      {error && <div className="error">{JSON.stringify(error)}</div>}
    </div>
  )
}

const mapStateToProps = ({items, user, error}) => ({
  items,
  error,
  user,
}); 

const mapDispatchToProps = dispatch => ({
  loadItems: () => dispatch(loadItems()),
  addItems: (title, excerpt) => dispatch(addItems(title, excerpt)),
  deleteItems: (id) => dispatch(deleteItems(id)),
})

export default connect( mapStateToProps, mapDispatchToProps)(ListContainer);
