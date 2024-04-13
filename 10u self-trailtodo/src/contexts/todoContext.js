import { createContext, useContext } from "react";

export const TodoContext = createContext({
   todos:{
    id: 1,
    todo: " search me ",
    completed: false
   },
   addTodo: (todo) => {},
   updateTodo: (id, todo) => {},
   deleteTodo: (id) => {},
   ToogleComplete: (id) => {}
})
 

export const TodoProvider = TodoContext.Provider


export const useTodo = () => {
    return useContext(TodoContext)
} 