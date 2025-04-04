import { Button } from "antd";
import { translations } from "../../translations";
import "./TodosList.css";
import { removeTodo, changeTodo, setEditingTodo } from "../../../store/features/todosSlice";
import { useSelector, useDispatch } from "react-redux";

export default function TodosList() {
  const editingTodo = useSelector((state) => state.todos.editingTodo);
  const todos = useSelector((state) => state.todos.todos);
  const language = useSelector((state) => state.language.language);
  const t = translations[language];
  const dispatch = useDispatch();

  const handleSave = () => {
    if (editingTodo) {
      dispatch(changeTodo({ id: editingTodo.id, updatedTodo: editingTodo }));
      dispatch(setEditingTodo());
    }
  };

  return (
    <ul className="list_style">
      {todos.map((todo, index) => (
        <li key={index}>
          <div className="parent_container">
            <div className="info_container">
              <p>
                {t.todoLabel}: {todo.text}
              </p>
              <p>
                {t.priorityLabel}: {todo.priority}
              </p>
            </div>
            <div className="buttons_container">
              <Button
                className="control_button"
                onClick={() => dispatch(setEditingTodo(todo))}
              >
                {t.editButton}
              </Button>
              <Button
                className="control_button"
                onClick={() => dispatch(removeTodo(todo.id))}
              >
                {t.deleteButton}
              </Button>
            </div>
          </div>
          {editingTodo && editingTodo.id === todo.id && (
            <div className="edit_container">
              <input
                className="edit_text_holder"
                type="text"
                value={editingTodo.text}
                onChange={(element) =>
                  dispatch(setEditingTodo({ ...editingTodo, text: element.target.value }))
                }
              />
              <select
                className="edit_text_holder"
                type="text"
                value={editingTodo.priority}
                onChange={(element) =>
                  dispatch(setEditingTodo({
                    ...editingTodo,
                    priority: element.target.value,
                  }))
                }
              >
                <option>{t.highPriority}</option>
                <option>{t.mediumPriority}</option>
                <option>{t.lowPriority}</option>
              </select>
              <Button className="save_button" onClick={handleSave}>
                {t.saveButton}
              </Button>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
