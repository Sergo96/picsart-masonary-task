import styled from 'styled-components';

export const PhotoDetailViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${({ theme }) => theme.spacing(4)};
  background-color: ${({ theme }) => theme.colors.neutralLight};
  padding: ${({ theme }) => theme.spacing(4)};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const ImageWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  border-radius: 8px;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
`;

export const InfoWrapper = styled.div`
  margin-top: ${({ theme }) => theme.spacing(3)};
  text-align: center;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const Title = styled.h1`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const Photographer = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

export const PhotoLink = styled.p`
  font-size: 16px;
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Description = styled.p`
  font-size: 16px;
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const LikeButton = styled.button<{ $liked: boolean }>`
  padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(2)};
  font-size: 16px;
  border: none;
  border-radius: 4px;
  background-color: ${({ $liked, theme }) => ($liked ? theme.colors.success : theme.colors.primary)};
  color: white;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.dark};
  }
`;
