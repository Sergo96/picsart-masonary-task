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
} from './PhotoDetail.styles';

type PhotoDetailProps = Photo;

export const PhotoDetailView = ({
  width,
  height,
  url,
  photographer,
  photographer_url,
  src,
  liked,
  alt,
}: PhotoDetailProps) => {
  return (
    <PhotoDetailViewContainer>
      <ImageWrapper>
        <Image
          src={src.large} // Default image for browsers that don't support srcset
          alt={alt}
          srcSet={`${src.small} 500w, ${src.medium} 800w, ${src.large} 1200w, ${src.large2x} 2400w`}
          sizes='(max-width: 600px) 500px, (max-width: 900px) 800px, 1200px' // Adjust sizes based on viewport width
          loading='lazy' // Lazy load for better performance
        />
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
