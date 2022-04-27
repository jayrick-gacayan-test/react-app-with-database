import './App.css';
import TodoApp from './Components/TodoApp';
import TodoForm from './Components/TodoForm';

function App() {
  return (
    <div className="App">
      <TodoForm />
      <TodoApp />      
    </div>
  );
}

export default App;
