import { Children } from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoList = () => {
  return (
    <TodoListWrappper>
      {Children.toArray(Array.from({ length: 3 }).map(() => <TodoItem />))}
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
