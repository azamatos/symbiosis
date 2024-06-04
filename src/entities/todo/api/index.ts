import { v4 as uuidv4 } from "uuid";

import { db } from "@/shared/lib/db";

export const handleDeleteTodo = async (id: string) => {
  try {
    await db.todoList.delete(id);
  } catch (error) {
    console.log(error);
  }
};

export const handleCompleteTodo = async (id: string, hasCompleted: boolean) => {
  try {
    await db.todoList.update(id, { hasCompleted });
  } catch (error) {
    console.log(error);
  }
};

export const handleCreateTodo = async (title: string) => {
  try {
    await db.todoList.add({
      id: uuidv4(),
      createdDate: new Date().toString(),
      hasCompleted: false,
      title,
    });
  } catch (error) {
    console.log(error);
  }
};
