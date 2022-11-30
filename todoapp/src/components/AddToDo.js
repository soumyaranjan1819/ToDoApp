import React from 'react'
import { useState } from 'react';

function AddToDo(props) {
  const [todo,setTodo]=useState('')
  
  const getData=(e)=>{
    e.preventDefault();
    props.getDataHandler({todo})
    setTodo('');
  }
  return (
    <form className='add-todo' onSubmit={getData}>
        <input 
        type="text" name="" id="todo-ip" 
        placeholder='Enter task to do' value={todo}
        onChange={(e)=>setTodo(e.target.value)}
        required/>
        <button id='btn-add'>Add</button>
    </form>
  )
}

export default AddToDo