import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.textPrimary};
  color: ${({ theme }) => theme.colors.light};
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
