import styled from 'styled-components';

export default styled.select`
  width: 100%;
  background: #fff;
  border:none;
  border: 2px solid #fff;
  box-shadow: 0 4 10 rgba(0,0,0, 0.04);
  height: 52px;
  border-radius: 4px;
  outline: none;
  padding: 0 16px;
  font-size: 16px;
  transition: all 0.2s ease-in;
  cursor: pointer;

  &:focus {
    border-color:${({ theme }) => theme.colors.primary.main};

  }
`;
