import styled from 'styled-components';
import { useTodoList } from '../store/useTodoStore';
import { useActiveSection } from '../store/useNavigationStore';
import TodoItem from './TodoItem';

const TodoList = () => {
  const todoList = useTodoList();
  const activeSection = useActiveSection();

  return (
    <TodoListWrappper>
      {todoList.map((todo) => {
        switch (activeSection) {
          case 'ALL':
            return <TodoItem key={todo.id} todo={todo} />;
          case 'ACTIVE':
            return todo.isDone || <TodoItem key={todo.id} todo={todo} />;
          case 'DONE':
            return todo.isDone && <TodoItem key={todo.id} todo={todo} />;
          default:
            return null;
        }
      })}
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
