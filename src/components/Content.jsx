import LoginForm from "./LoginForm/LoginForm";
import TodoApp from "./TodoApp/TodoApp";
import { useSelector } from "react-redux";
export default function Content() {
  const isAuth = useSelector(((state) => state.login.isAuth));

  return (
    <div>
      {isAuth ? <TodoApp /> : <LoginForm />}
    </div>
  );
}
