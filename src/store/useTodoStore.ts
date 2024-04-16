import { create } from 'zustand';
import { Todo } from '../types/todo';
import { getLocalStorage } from '../utils/localStorage';

interface State {
  todoList: Todo[];
}

interface Action {
  actions: {
    addTodo: (content: Todo['content']) => void;
    toggleTodo: (id: Todo['id']) => void;
    deleteTodo: (id: Todo['id']) => void;
  };
}

const useTodoStore = create<State & Action>((set) => ({
  todoList: getLocalStorage(),
  actions: {
    addTodo: (content) =>
      set(({ todoList }) => {
        const id = crypto.randomUUID();
        const newTodo = {
          id,
          content,
          isDone: false,
        };

        localStorage.setItem(id, JSON.stringify(newTodo));

        return {
          todoList: [...todoList, newTodo],
        };
      }),
    toggleTodo: (id) =>
      set(({ todoList }) => ({
        todoList: todoList.map((todo) => {
          if (todo.id === id) {
            const item = localStorage.getItem(id);

            if (item) {
              const { id, content, isDone } = JSON.parse(item);

              localStorage.setItem(
                id,
                JSON.stringify({
                  id,
                  content,
                  isDone: !isDone,
                }),
              );
            }

            return { ...todo, isDone: !todo.isDone };
          } else return todo;
        }),
      })),
    deleteTodo: (id) =>
      set(({ todoList }) => {
        localStorage.removeItem(id);

        return { todoList: todoList.filter((todo) => todo.id !== id) };
      }),
  },
}));

export const useTodoList = () => useTodoStore((state) => state.todoList);
export const useTodoActions = () => useTodoStore((state) => state.actions);
