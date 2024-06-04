import { memo } from "react";
import { useLiveQuery } from "dexie-react-hooks";

// components
import { TodoItem } from "@/entities/todo/ui";

// utils
import { db } from "@/shared/lib/db";

export const TodoList = memo(() => {
  const todoList = useLiveQuery(() => db.todoList.toArray());

  return (
    <div id="todo-list" className="perfect-scrollbar">
      {todoList?.map((todo) => (
        <TodoItem key={todo.id} item={todo} />
      ))}
    </div>
  );
});
