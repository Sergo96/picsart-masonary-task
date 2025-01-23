import React, { FC } from 'react';
import { Photo } from '../../../../common/types';
import {
  Description,
  ImageWrapper,
  InfoWrapper,
  LikeButton,
  PhotoDetailViewContainer,
  Photographer,
  PhotoLink,
  Title,
  Image,
} from './PhotoDetail.styles.ts';

type PhotoDetailProps = Photo;

export const PhotoDetailView: FC<PhotoDetailProps> = ({
  width,
  height,
  url,
  photographer,
  photographer_url,
  src,
  liked,
  alt,
}) => {
  return (
    <PhotoDetailViewContainer>
      <ImageWrapper>
        <Image src={src.large2x} alt={alt} />
      </ImageWrapper>
      <InfoWrapper>
        <Title>{alt}</Title>
        <Photographer>
          Photo by{' '}
          <a href={photographer_url} target='_blank' rel='noopener noreferrer'>
            {photographer}
          </a>
        </Photographer>
        <PhotoLink>
          <a href={url} target='_blank' rel='noopener noreferrer'>
            View on Pexels
          </a>
        </PhotoLink>
        <Description>
          <strong>Dimensions:</strong> {width} x {height} px
        </Description>
        <LikeButton $liked={Boolean(liked)}>{liked ? 'Liked' : 'Like'}</LikeButton>
      </InfoWrapper>
    </PhotoDetailViewContainer>
  );
};
