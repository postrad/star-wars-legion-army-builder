import styled from 'styled-components';

const Button = styled.button`
  background-color: transparent;
  color: #333;
  border: 0;
  font-size: 18px;
  line-height: 18px;
  padding: 0;

  &:focus {
    outline: 1px dashed #333;
    outline-offset: 2px;
  }
`;

export default Button;

