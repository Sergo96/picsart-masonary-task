import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const SpinnerWrapper = styled.div<{ size: string; color: string }>`
  display: inline-block;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border: 4px solid ${({ theme }) => theme.colors?.info};
  border-radius: 50%;
  border-top-color: transparent;
  animation: ${spin} 1s linear infinite;
`;
