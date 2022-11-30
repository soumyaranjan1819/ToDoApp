import React,{useState} from 'react'

function TodoCard(props) {
  const [edit, setEdit]=useState('Edit1')

  const{todo,id}=props.todo
  
  const deleteHandler=()=>{
    props.clickHandler(id)
  }
  const editHandler=()=>{
    (edit==="Edit1") ? setEdit('Edit') : setEdit('Edit1')
  }

  return (
    <div className='todo-card'>
        <input type="checkbox" id="" />
        <p>{todo}</p>
        <div className="buttons">
            <button className='btn-e'onClick={editHandler} >{edit}</button>
            <button className='btn-d' onClick={deleteHandler}  >Delete</button>
        </div>
    </div>
  )
}

export default TodoCard