import styled from 'styled-components';

export const BackButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.colors.neutralLight};
  border: 1px solid ${({ theme }) => theme.colors.neutralDark};
  border-radius: 4px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textPrimary};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.neutralGray};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.neutralMedium};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary};
  }
`;

export const BackIcon = styled.span`
  margin-right: 8px;
  display: inline-flex;
  align-items: center;

  &::before {
    content: '← Back'; /* Unicode arrow symbol */
    font-size: 18px;
    color: inherit;
  }
`;
