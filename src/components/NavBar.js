import React,{useContext}from 'react'
import { TodoListContext } from '../contexts/TodoListContext';

const Navbar = () => {
    const {todoLists} = useContext(TodoListContext) ;
    return ( 
        <div className="navbar">
            <h1>My Todo List</h1> 
            <p>Currently you have {todoLists.length} tasks to do</p>   
        </div>
     );
}
 
export default Navbar;

