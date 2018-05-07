import styled from 'styled-components';

const Button = styled.button`
  /* background-color: #2196f3; */
  background-color: #666;
  color: white;
  border: 0;
  padding: 8px 16px;

  &:focus {
    outline: 1px dashed #666;
    outline-offset: 2px;
  }
  
`;

export default Button;

