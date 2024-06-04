import { ChangeEvent, FC } from "react";

// actions
import { handleCompleteTodo, handleDeleteTodo } from "../api";

interface Props {
  item: Todo.Item;
}

export const TodoItem: FC<Props> = ({ item }) => {
  // handlers
  const handleToggle = (event: ChangeEvent<HTMLInputElement>) => {
    handleCompleteTodo(item.id, event.target.checked);
  };

  const handleDeleteItem = () => {
    handleDeleteTodo(item.id);
  };

  return (
    <div className={`todo ${item.hasCompleted ? "task-complete" : ""}`}>
      <label>
        <input type="checkbox" onChange={handleToggle} />
        {item.title}
      </label>
      <svg
        onClick={handleDeleteItem}
        className="icon todo-close"
        fill="currentColor"
      >
        <use xlinkHref="#cross"></use>
      </svg>
    </div>
  );
};
