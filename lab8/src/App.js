import logo from './logo.svg';
import './App.css';
import Header from './Header';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import react,{useState} from 'react'

function App() {

    const [todo,setTodo] = useState([])

  return (
    <div className="App">
        <Header/>
        <AddTodo todo={todo} setTodo={setTodo}/>
        <TodoList todo={todo} setTodo={setTodo}/>
    </div>
   );
}

export default App;
