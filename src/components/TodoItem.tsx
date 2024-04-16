import { useState } from 'react';
import styled from 'styled-components';

const TodoItem = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <ItemWrapper>
      <CheckBox type="checkbox" onClick={() => setIsChecked((prev) => !prev)} />
      <TodoContent $isChecked={isChecked}>todo</TodoContent>
      <DeleteButton>DELETE</DeleteButton>
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
