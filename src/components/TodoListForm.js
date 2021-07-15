import React,{useContext,useState} from 'react' ; 
import { TodoListContext } from '../contexts/TodoListContext';
import { useAuth } from '../contexts/AuthContext';
import { useHistory } from 'react-router-dom';

const TodoListForm = () => {
    const {addTask} = useContext(TodoListContext) ; 
    const [task,setTask]= useState('');
    const [time,setTime]= useState('');
    const {logout} = useAuth() ; 
    const history = useHistory() 

    const handleSubmit = (e) => {
        e.preventDefault() ; 
        addTask(task,time) ; 
        setTask('') ;
        setTime('');
        }
    async function handleLogOut()
    {
        try {
            await logout()
            history.push('/login')
        } catch {

        }
    }
    return (  
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="new task" value={task} 
            onChange={(e)=>setTask(e.target.value)}  required />
            <input type="time" value={time} onChange={(e)=>setTime(e.target.value)} 
            required/>   
            <input type="submit" value='Add task' />
        </form>
        <div className="btn">
        <button onClick={handleLogOut}>Logout</button>
        </div>
        </>
    );
}
 
export default TodoListForm;
