import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
    todos: [{id: 1, text: "Hello world"}]
}

// function sayHello() {
//     console.log("Hello world");
// }

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        // addTodo: sayHello,
        addTodo: () => {},
        removeTodo: () => {},
    }
})
