import React from 'react'
import TodoCard from './TodoCard'

function TodoList(props) {
  const {todos, getId} =props

  const getIdHandler = (id)=>{
    getId(id)
  }

  return (
    <div className='todo-list'>
      {todos.map((todo)=>(
      <TodoCard todo={todo} key={todos.id} clickHandler={getIdHandler} />
    )
  )}
    </div>
  )
}

export default TodoList