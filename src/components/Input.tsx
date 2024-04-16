import { KeyboardEvent, useRef } from 'react';
import styled from 'styled-components';
import { useTodoActions } from '../store/useTodoStore';

const Input = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { addTodo } = useTodoActions();

  const handleAddTodo = (e: KeyboardEvent) => {
    if (e.key !== 'Enter') return;
    if (!inputRef.current || inputRef.current.value === '') return;

    addTodo(inputRef.current.value);

    inputRef.current.value = '';
  };

  return (
    <InputWrapper
      placeholder="Todo + Enter"
      onKeyDown={handleAddTodo}
      ref={inputRef}
    />
  );
};

export default Input;

const InputWrapper = styled.input`
  width: 100%;
  padding: 15px 20px;
  font-size: 28px;
  box-shadow: 2px 2px 5px #2c4251;

  &::placeholder {
    color: lightgray;
  }
`;
