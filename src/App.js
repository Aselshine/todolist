
import './App.css';
import CreateToDo from './components/create-todo/CreateTodo';
import Header from './components/header/header';
import ToDoItem from './components/todo-item/ToDoItem';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='content'>
        <CreateToDo />
        <div className='list'>
        
          <ToDoItem />
          <ToDoItem />
          <ToDoItem />
          <ToDoItem />
        </div>
      </div>
    </div>
  );
}



export default App;
