
import { useEffect, useState } from 'react';
import './App.css';
import CreateToDo from './components/create-todo/CreateTodo';
import Header from './components/header/header';
import ToDoItem from './components/todo-item/ToDoItem';



const initialState = JSON.parse(localStorage.getItem('todos')) || []


function App() {
  const [todos, setTodos] = useState(initialState);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))

  }, [todos]);




  const onDelete = (id) => {
    const newTodos = todos.filter((item) => item.id !== id)
    console.log(newTodos);
    setTodos(newTodos)
  }

 



  const onStatusChange = (id) => {
    const newArr = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, status: !todo.status }

      }
      return todo
    })
    setTodos(newArr)
  }


  const onEdit = (id, newText) => {

    const newArr = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text: newText }

      }
      return todo
    })
    setTodos(newArr)
    alert("Hello")
  }

  const onAddTodo = (str) => {
    setTodos([...todos, { text: str, status: false, id: Date.now() }])
  }



  const newTodos = todos.map((item) => {
    return <ToDoItem key={item.id}
      id={item.id}
      text={item.text}
      status={item.status}
      onDelete={onDelete}
      onEdit={onEdit}
      onStatus={onStatusChange} 
      />
  })




  const todoCompletes = todos.reduce((akk, item) => akk + Number(item.status), 0)

  return (
    <div className="App">
      <Header todoLength={todos.length} todoDone={todoCompletes} />
      <div className='content'>
        <CreateToDo onAddTodo={onAddTodo} />
        <div className='content_body'>
          {newTodos}
        </div>
      </div>
    </div>
  );
}

export default App;
