import styled from 'styled-components';
import { useTodoList } from '../store/useTodoStore';
import TodoItem from './TodoItem';

const TodoList = () => {
  const todoList = useTodoList();

  return (
    <TodoListWrappper>
      {todoList.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </TodoListWrappper>
  );
};

export default TodoList;

const TodoListWrappper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
`;
