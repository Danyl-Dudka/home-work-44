import { Button, Input } from "antd";
import { TreeSelect } from "antd";
import { translations } from "../../translations";
import "./newTodo.css";
import { useSelector, useDispatch } from "react-redux";
import {addTodo, setValue, setPriority} from './../../../store/features/todosSlice';


export default function NewTodo() {
  const dispatch = useDispatch();
  const language  = useSelector((state) => state.language.language);
  const value = useSelector((state) => state.todos.text);
  const priority = useSelector((state) => state.todos.priority);
  const t = translations[language];

  const treeData = [
    {
      value: t.highPriority,
      title: t.highPriority,
    },
    {
      value: t.mediumPriority,
      title: t.mediumPriority,
    },
    {
      value: t.lowPriority,
      title: t.lowPriority,
    },
  ];

  const handleSaveValue = () => {
    dispatch(addTodo({text: value, priority: priority}))
  };

  return (
    <div>
      <form className="form_input_styles">
        <Input
          className="input_form"
          placeholder={t.placeholderInput}
          value={value}
          onChange={(event) => dispatch(setValue(event.target.value))}
        />
        <TreeSelect
          className="form_select"
          showSearch
          style={{ width: "100%", fontSize: "26px" }}
          value={priority}
          dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
          placeholder={t.placeholderPriority}
          allowClear
          treeDefaultExpandAll
          onChange={(newValue) => dispatch(setPriority(newValue))}
          treeData={treeData}
        />
        <Button className="add_button" onClick={handleSaveValue}>
          {t.addButton}
        </Button>
      </form>
    </div>
  );
}
