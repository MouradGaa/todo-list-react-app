import React,{useContext} from 'react';
import { TodoListContext } from '../contexts/TodoListContext';
import TaskDetails from './TaskDetails';

const TodoList = () => {
    const {todoLists} = useContext(TodoListContext) ; 
    return todoLists.length ? ( // if it has lenght return the tasks 
        <div className="todo-list">
            <ul>
                {todoLists.map(task=>{
                    return(<TaskDetails task={task} key={task.id}/>) // task is a prop       
                 })}
            </ul>
        </div>
        
     ) : (  // else return something else
         <div className ='emptyList'>
            <h1>What do you have in mind today ?</h1>
            {console.log(todoLists)}
         </div>
       
     )
}
 
export default TodoList;