import Dexie, { EntityTable } from "dexie";

export const db = new Dexie("TodoList") as Dexie & {
  todoList: EntityTable<Todo.Item, "id">;
};
db.version(1).stores({
  todoList: "id, title, hasCompleted, createdDate",
});
