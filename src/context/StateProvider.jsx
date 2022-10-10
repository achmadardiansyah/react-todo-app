import { createContext, useContext, useState } from "react";

const StateContextProvider = createContext()

const StateProvider = ({children}) => {
    
    const [todos, setTodos] = useState([])

    return ( 
        <StateContextProvider.Provider value={{ todos, setTodos }}>
            {children}
        </StateContextProvider.Provider>
     );
}
 
export default StateProvider;

export const TodoState = () => useContext(StateContextProvider)