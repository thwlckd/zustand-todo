import { create } from 'zustand';
import { Todo } from '../types/todo';
import { devtools, persist } from 'zustand/middleware';

interface State {
  todoList: Todo[];
}

interface Action {
  addTodo: (content: Todo['content']) => void;
  toggleTodo: (id: Todo['id']) => void;
  deleteTodo: (id: Todo['id']) => void;
}

const useTodoStore = create(
  devtools(
    persist<State & Action>(
      (set) => ({
        todoList: [],
        addTodo: (content) =>
          set(({ todoList }) => ({
            todoList: [
              ...todoList,
              {
                id: crypto.randomUUID(),
                content,
                isDone: false,
              },
            ],
          })),
        toggleTodo: (id) =>
          set(({ todoList }) => ({
            todoList: todoList.map((todo) =>
              todo.id === id ? { ...todo, isDone: !todo.isDone } : todo,
            ),
          })),
        deleteTodo: (id) =>
          set(({ todoList }) => ({
            todoList: todoList.filter((todo) => todo.id !== id),
          })),
      }),
      {
        name: 'zustand-todo-list',
      },
    ),
  ),
);

export const useTodoList = () => useTodoStore((state) => state.todoList);
export const useTodoActions = () =>
  useTodoStore((state) => ({
    addTodo: state.addTodo,
    deleteTodo: state.deleteTodo,
    toggleTodo: state.toggleTodo,
  }));
