import { ChangeEvent, useState } from "react";

// components
import { Button } from "@/shared/ui/button";

// actions
import { handleCreateTodo } from "@/entities/todo/api";

export const TodoListFooter = () => {
  const [title, setTitle] = useState("");

  // handlers
  const handleSetTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleCreate = async () => {
    if (title) {
      handleCreateTodo(title);
      setTitle("");
    }
  };

  return (
    <div className="footer">
      <input
        maxLength={50}
        id="todo-new"
        value={title}
        onChange={handleSetTitle}
        type="text"
        placeholder="New Todo"
        className="todo-input"
      />
      <Button onClick={handleCreate}>Add Todo</Button>
      <small>You can change the position of the container by dragging it</small>
    </div>
  );
};
