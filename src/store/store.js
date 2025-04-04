import { configureStore } from "@reduxjs/toolkit";
import languageReducer, { setLanguage } from "./features/languageSlice";
import themeReducer, { setTheme } from "./features/themeSlice";
import loginReducer from "./features/loginSlice";
import todosReducer, {
  addTodo,
  removeTodo,
  changeTodo,
} from "./features/todosSlice";

const generalMiddleware = (store) => (next) => (action) => {
  const result = next(action);

  if (action.type === setLanguage.type) {
    localStorage.setItem("language", action.payload);
  } else if (action.type === setTheme.type) {
    localStorage.setItem("theme", action.payload);
  } else if (
    action.type === addTodo.type ||
    action.type === removeTodo.type ||
    action.type === changeTodo.type
  ) {
    const todos = store.getState().todos.todos;
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  return result;
};

export const store = configureStore({
  reducer: {
    language: languageReducer,
    theme: themeReducer,
    login: loginReducer,
    todos: todosReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(generalMiddleware),
});