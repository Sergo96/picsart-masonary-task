import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 70px;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(5px);
  z-index: 1000;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpinnerWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
