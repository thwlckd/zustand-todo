import styled from 'styled-components';

const Input = () => {
  return <InputWrapper placeholder="Todo + Enter" />;
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
