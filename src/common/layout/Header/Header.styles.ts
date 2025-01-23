import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  position: fixed;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.textPrimary};
  color: ${({ theme }) => theme.colors.light};
  height: 40px;
  z-index: 9999;
  top: 0;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Icon = styled.div`
  width: 24px;
  height: 24px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.light};
`;
