import {useEffect, useState} from 'react'
import './TodoList.css'
import {FaTrashAlt, FaCheck} from 'react-icons/fa'
import { TodoState } from '../../context/StateProvider';

const TodoList = () => {

    const { todos, setTodos } = TodoState()

    const removeTodo = (id) => {
        const todosLeft = todos.filter(todo => todo.id !== id)
        setTodos(todosLeft)
        localStorage.setItem('todos', JSON.stringify(todosLeft))
    }

    const completeTodo = (id) => {
        const newTodos = todos.map(todo => {
                            if (todo.id === id){
                                return {
                                    ...todo,
                                    completed: !todo.completed
                                }
                            }
                            return {
                                ...todo
                            }
                        })
                        
        localStorage.setItem('todos', JSON.stringify(newTodos))
        setTodos(newTodos)
        
    }

    useEffect(()=>{
        setTodos(JSON.parse(localStorage.getItem('todos')))
    }, [])

    return ( 
        <div>
            <ul>
                {todos?.length > 0 && todos.map(todo => (
                    <li key={todo?.id}>
                        <span className={todo?.completed ? 'completed' : ''}>{todo?.text}</span>
                        <button className='btn complete-btn' onClick={()=>completeTodo(todo?.id)}><FaCheck/></button>
                        <button className='btn trash-btn' onClick={()=>removeTodo(todo?.id)}><FaTrashAlt/></button>
                    </li>
                ))}
            </ul>
        </div>
     );
}
 
export default TodoList;