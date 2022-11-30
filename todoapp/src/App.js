import './App.css'
import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header'
import AddToDo from './components/AddToDo'
import TodoList from './components/TodoList'
import Theam from './Theam';

const getLocalData=()=>{
  let retriveList = localStorage.getItem('TodoList')
  if (retriveList) return JSON.parse(localStorage.getItem('TodoList')) 
  else return []
}

function App() {
  const [todos, setTodos] = useState(getLocalData)
  
  const getDataHandler=(todo)=>{
    setTodos([...todos, {id:uuidv4(),...todo}])
  }

  const deleteTodoHandler=(id)=>{
    const updatedTodo= todos.filter((todo)=>{
      return todo.id !==id
    });
      setTodos(updatedTodo)
  }
  

  useEffect(()=>{
    localStorage.setItem('TodoList', JSON.stringify(todos))
  },[todos])

  return (
    <>
    <Header />
    <AddToDo getDataHandler={getDataHandler}/>
    <TodoList todos={todos} getId={deleteTodoHandler} />
    <Theam />
    </>
  );
}

export default App;
