import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import React,{useState , useEffect} from 'react';
import TodoList from './components/TodoList';

const App=()=> {
  const initialState=JSON.parse(localStorage.getItem("todo")) || [];
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState(initialState)
  const [editTodo, setEditTodo] = useState(null)
  useEffect(()=>{
    localStorage.setItem("todo",JSON.stringify(todo))
  },[todo])
  return( 
  <div className='container-fluid'>
    <div className='app-wrapper'>
      <div><Header/></div>
      <div>
        <Form
        input={input}
        setInput={setInput}
        todo={todo}
        setTodo={setTodo}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
        />
      </div>
      <div>
        <TodoList 
        todo={todo} 
        setTodo={setTodo} 
        setEditTodo={setEditTodo}/>
      </div>
    </div>
  </div>
  );
}

export default App;
