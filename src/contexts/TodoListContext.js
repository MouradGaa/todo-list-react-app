import React, {createContext, useState,useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid' ;

export const TodoListContext = createContext() ; // creating a context and export it 

const TodoListContextProvider = (props) => {  // pass props and we use useState
    const [todoLists,setTodoList] = useLocalStorage("tasks",[]);
    function useLocalStorage(key,initialValue){
        // State to store our value
        // Pass initial state function to useState so logic is only executed once
        const [storedValue, setStoredValue] = useState(()=>{
          try {
            // Get from local storage by key
            const item = window.localStorage.getItem(key);
            // Parse stored json or if none return initialValue
            return item ? JSON.parse(item) : initialValue;
          } catch (error) {
            // If error also return initialValue
            console.log(error);
            return initialValue;
          }
        });
          // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };
  return [storedValue, setValue];
}
    useEffect(()=> 
    {
     localStorage.setItem('tasks',JSON.stringify(todoLists))
    },[todoLists]) 
    const addTask = (task,time) => 
    {
        setTodoList([...todoLists,{task,time,id :uuidv4()}])
    }
    const removeTask = (id) => 
    {
        console.log(id) ;
        setTodoList(todoLists.filter(task => task.id !== id )) // return all object that does not match the id

    }
    return (  
       <TodoListContext.Provider value={{todoLists,addTask,removeTask}}>
        {props.children}
       </TodoListContext.Provider>
    );
}
 
export default TodoListContextProvider;
