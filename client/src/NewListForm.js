import React, { useRef, useState } from 'react'

function NewListForm({onNewList = f => f}) {
  const titleRef = useRef();
  const [title, setTitle] = useState();
  const [excerpt, setExcerpt] = useState();

  const submit = e => {
      e.preventDefault()
      onNewList(title, excerpt)
      setTitle('')
      setExcerpt('')
      titleRef.current.focus()
  }

  return (
    <form onSubmit={submit}>
      <input onChange={(e) => setTitle(e.target.value)} value={title} ref={titleRef} type="text" placeholder="Title..." required />
      <input onChange={(e) => setExcerpt(e.target.value)} value={excerpt} type="text" placeholder="Excerpt..." required />
      <button>Add List</button>
    </form>
  )
}

export default NewListForm
