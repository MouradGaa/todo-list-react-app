import React,{useContext,useState} from 'react' ; 
import { TodoListContext } from '../contexts/TodoListContext';

const TodoListForm = () => {
    const {addTask} = useContext(TodoListContext) ; 
    const [task,setTask]= useState('');
    const [time,setTime]= useState('');
    const handleSubmit = (e) => {
        e.preventDefault() ; 
        addTask(task,time) ; 
        setTask('') ;
        setTime('');
        }
    return (  
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="new task" value={task} 
            onChange={(e)=>setTask(e.target.value)}  required />
            <input type="time" value={time} onChange={(e)=>setTime(e.target.value)} 
            required/>   
            <input type="submit" value='Add task' />
        </form>
    );
}
 
export default TodoListForm;
