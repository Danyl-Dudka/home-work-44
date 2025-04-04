import { configureStore } from "@reduxjs/toolkit";
import languageReducer  from './features/languageSlice'
import themeReducer from './features/themeSlice';
import loginReducer from './features/loginSlice';
import todosReducer from './features/todosSlice'
export const store = configureStore({
    reducer: {
      language: languageReducer,
      theme: themeReducer,
      login: loginReducer,
      todos: todosReducer,
    },
  });