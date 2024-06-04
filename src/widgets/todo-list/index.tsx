import { useEffect, useState } from "react";
import { useLiveQuery } from "dexie-react-hooks";

// components
import { TodoListFooter } from "@/features/footer";
import { TodoItem } from "@/entities/todo/ui";

// utils
import { db } from "@/shared/lib/db";

export const TodoList = () => {
  const todoList = useLiveQuery(() => db.todoList.toArray());
  const [coordinates, setCoordinates] = useState({
    x: 600,
    y: 100,
  });

  useEffect(() => {
    window.addEventListener("mouseup", handleStopDragging);
    () => {
      window.removeEventListener("mouseup", handleStopDragging);
    };
  }, [handleStopDragging, setCoordinates]);

  // handlers
  const handleSetCoordinates = (event: MouseEvent) => {
    setCoordinates({ x: event.clientX - 16, y: event.clientY - 22 });
  };

  const handleStartDragging = () => {
    window.addEventListener("mousemove", handleSetCoordinates);
  };

  function handleStopDragging() {
    window.removeEventListener("mousemove", handleSetCoordinates);
  }

  return (
    <div id="container" style={{ top: coordinates.y, left: coordinates.x }}>
      <svg
        onMouseDown={handleStartDragging}
        className="icon drag-icon"
        fill="currentColor"
      >
        <use xlinkHref="#draggable"></use>
      </svg>
      <h1>To-do List</h1>
      <div id="todo-list" className="perfect-scrollbar">
        {todoList?.map((todo) => (
          <TodoItem key={todo.id} item={todo} />
        ))}
      </div>
      <TodoListFooter />
    </div>
  );
};
