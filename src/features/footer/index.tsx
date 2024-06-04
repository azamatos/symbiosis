import { ChangeEvent, FormEvent, useState } from "react";

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

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (title) {
      handleCreateTodo(title);
      setTitle("");
    }
  };

  return (
    <div className="footer">
      <form onSubmit={handleSubmit}>
        <input
          maxLength={50}
          value={title}
          onChange={handleSetTitle}
          type="text"
          placeholder="New Todo"
        />
        <Button type="submit">Add Todo</Button>
      </form>
      <small>You can change the position of the container by dragging it</small>
    </div>
  );
};
