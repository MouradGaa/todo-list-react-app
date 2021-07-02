import React, {useContext} from 'react' ; 
import { TodoListContext } from '../contexts/TodoListContext';


const TaskDetails = ({task}) => {
    const {removeTask} = useContext(TodoListContext) ;
    return (  
        <li onClick = { () => removeTask(task.id)}>
            <div className='task'>{task.task}</div>
            <div className='time'>{task.time}</div>
        </li>
    );
}
 
export default TaskDetails;

