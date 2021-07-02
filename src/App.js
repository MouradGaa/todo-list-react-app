import Navbar from "./components/NavBar";
import TodoListContextProvider from "./contexts/TodoListContext";
import TodoList from "./components/TodoList";
import TodoListForm from "./components/TodoListForm";

function App() {
  return (
    <div className="App">
    <TodoListContextProvider>
    <Navbar/>
    <TodoList/>
    <TodoListForm />
    </TodoListContextProvider>
      
    </div>
  );
}

export default App;
