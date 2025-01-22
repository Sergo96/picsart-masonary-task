import styled from 'styled-components';

export const SearchInputWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  padding: 8px;
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 4px;
  font-size: 16px;
  width: 200px;
  transition: width 0.3s;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.info};
    width: 250px;
  }
`;
