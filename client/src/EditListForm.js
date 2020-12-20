import React, { Component, useState } from 'react';
function EditListForm(props) {

  const [list, setList]= useState({
    id:'',
    title:'',
    excerpt:''
  });
  const handleChange = (e) => {
    setList({[e.target.name]: e.target.value})
  }
  
  const handleSubmit=(e)=>{
      e.preventDefault();
      props.editList(list.id, list.title, list.excerpt);
  }
  
  return
    (
      <form onSubmit={handleSubmit}>
        <input  name="title"
                type="text"
                placeholder="Title..."
                value={list.title}
                onChange={handleChange} />
        <input  name="excerpt"
                type="text"
                placeholder="Excerpt..."
                value={list.excerpt}
                onChange={handleChange} />
        <button>Update List</button>
    </form>  
    )
}
export default EditListForm;