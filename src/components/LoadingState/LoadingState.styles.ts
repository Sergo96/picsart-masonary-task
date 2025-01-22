import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 50px;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(5px);
  justify-content: center;
  align-items: center;
  z-index: 1000;
  pointer-events: none;
`;
