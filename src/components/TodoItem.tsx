import styled from 'styled-components';
import { Todo } from '../types/todo';
import { useTodoActions } from '../store/useTodoStore';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const { toggleTodo, deleteTodo } = useTodoActions();

  const handleToggleTodo = () => {
    toggleTodo(todo.id);
  };

  const handleDeleteTodo = () => {
    deleteTodo(todo.id);
  };

  return (
    <ItemWrapper>
      <CheckBox
        type="checkbox"
        onClick={handleToggleTodo}
        defaultChecked={todo.isDone}
      />
      <TodoContent $isChecked={todo.isDone}>{todo.content}</TodoContent>
      <DeleteButton onClick={handleDeleteTodo}>DELETE</DeleteButton>
    </ItemWrapper>
  );
};

export default TodoItem;

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
  font-size: 28px;
  padding: 15px 20px;
  box-shadow: 2px 2px 5px #2c4251;
  background-color: white;
`;

const CheckBox = styled.input`
  position: relative;
  width: 40px;
  height: 40px;
  border: 1px solid gray;
  border-radius: 3px;
  cursor: pointer;

  &:checked {
    background-color: #2c4251;
  }

  &:checked::after {
    content: '✔';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
  }
`;

const TodoContent = styled.p<{ $isChecked: boolean }>`
  flex: 1;
  word-break: break-all;
  text-decoration: ${({ $isChecked }) =>
    $isChecked ? 'line-through' : 'none'};
`;

const DeleteButton = styled.button`
  margin-left: auto;
  padding: 5px 10px;
  border-radius: 2px;
  background-color: lightcoral;
  font-size: 16px;
  cursor: pointer;
`;
