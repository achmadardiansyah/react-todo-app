import { useEffect, useState } from 'react';
import { TodoState } from '../../context/StateProvider';
import './Option.css'

const Options = () => {

    const { setTodos } = TodoState()

    const pickOption = (e) => {
        
        const { value }= e.target

        const saveTodos = JSON.parse(localStorage.getItem('todos'))

        switch (value) {
            case 'all':
                setTodos(saveTodos)
                break;
            case 'completed':
                const todosCompleted = saveTodos.filter(todo => todo.completed === true)
                setTodos(todosCompleted)
                break;
            case 'uncompleted':
                const todosUncompleted = saveTodos.filter(todo => todo.completed === false)
                setTodos(todosUncompleted)
            default:
                break;
        }
    }

    return ( 
        <div className='selectContainer'>
            <select onChange={pickOption}>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
     );
}
 
export default Options;