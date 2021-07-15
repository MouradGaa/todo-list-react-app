import React from 'react'
import Navbar from './NavBar'
import TodoListForm from './TodoListForm'
import TodoList from './TodoList'
export default function TodoApp() {
    return (
        <div className="todoapp">
            <Navbar />
            <TodoList />
            <TodoListForm />
        </div>
    )
}
