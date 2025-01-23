import styled from 'styled-components';

export const Container = styled.div<{ $itemPadding: number }>`
  overflow-y: scroll;
  height: 100vh;
  padding: ${({ $itemPadding }) => `${$itemPadding / 2}px`};
  box-sizing: border-box;
  margin-top: 70px;
`;

export const Placeholder = styled.div<{ $height: number }>`
  height: ${({ $height }) => `${$height}px`};
`;

export const Grid = styled.div<{ $itemWidth: number; $itemPadding: number }>`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(${({ $itemWidth }) => $itemWidth}px, 1fr));
  gap: ${({ $itemPadding }) => `${$itemPadding}px`};
`;

export const GridItem = styled.div<{ $itemHeight: number }>`
  height: ${({ $itemHeight }) => `${$itemHeight}px`};
  background: #f0f0f0;
  border-radius: 8px;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
