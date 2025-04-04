import NewTodo from "./NewTodo/NewTodo";
import TodosList from "./TodosList/TodosList";
import { translations } from "../translations";
import './TodoApp.css'
import { useSelector } from "react-redux";
export default function TodoApp() {
  const language  = useSelector(((state => state.language.language)));
  const t = translations[language];

  return (
    <div className="todo_application">
      <h3>{t.todoAppTitle}</h3>
        <NewTodo />
        <TodosList />
    </div>
  )
}