import styled from 'styled-components';

export const FallbackUIContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors?.neutralLight};
  color: ${({ theme }) => theme.colors?.textPrimary};
  padding: ${({ theme }) => theme.spacing?.(4)};
  text-align: center;
`;

export const Heading = styled.h1`
  font-size: 2rem;
  margin-bottom: ${({ theme }) => theme?.spacing?.(2)};
  color: ${({ theme }) => theme.colors?.primary};
`;

export const Message = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors?.textSecondary};
  margin-bottom: ${({ theme }) => theme?.spacing?.(3)};
`;

export const RetryButton = styled.button`
  padding: ${({ theme }) => theme?.spacing?.(1)} ${({ theme }) => theme?.spacing?.(2)};
  font-size: 1rem;
  background-color: ${({ theme }) => theme.colors?.primary};
  color: ${({ theme }) => theme.colors?.light};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors?.secondary};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors?.dark};
  }
`;
