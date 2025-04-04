import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    todos: JSON.parse(localStorage.getItem('todos')) || [],
    text: '',
    priority: null,
    editingTodo: null,
};

export const todosSlice = createSlice ({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: uuidv4(),
                text: action.payload.text,
                priority: action.payload.priority,
            }
            state.todos.push(newTodo);
        },

        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },

        changeTodo: (state, action) => {
            const { id, updatedTodo} = action.payload;
            const updatedTodos = state.todos.map((todo) =>
                todo.id === id ? {...todo, ...updatedTodo} : todo
            );
            state.todos = updatedTodos;
        },
        setValue: (state, action) => {
            state.text = action.payload;
        },
        setPriority: (state, action) => {
            state.priority = action.payload;
        },
        setEditingTodo: (state, action) => {
            state.editingTodo = action.payload;
        }
    }
})

export const {addTodo, removeTodo, changeTodo, setValue, setPriority, setEditingTodo} = todosSlice.actions;
export default todosSlice.reducer;