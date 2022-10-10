import './Input.css'
import {IoMdAdd} from 'react-icons/io'
import { useState, useEffect } from 'react'
import { TodoState } from '../../context/StateProvider'

const Input = () => {

    const [input, setInput] = useState('')
    const { setTodos } = TodoState()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!input) return
        const newTodo = {
            id: Math.floor(Math.random()*10000),
            text: input,
            completed: false
        }

        const saveTodos = JSON.parse(localStorage.getItem('todos')) || []
        saveTodos.push(newTodo)

        localStorage.setItem('todos', JSON.stringify(saveTodos))

        setTodos(prevTodos => ([
            ...prevTodos,
            newTodo
        ]))

        setInput('')
    }

    const handleInput = (e) => {
        setInput(e.target.value)
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder='Input todo...'
                onChange={handleInput}
                value={input}
            />
            <button>
                <IoMdAdd />
            </button>
        </form>
     );
}
 
export default Input;