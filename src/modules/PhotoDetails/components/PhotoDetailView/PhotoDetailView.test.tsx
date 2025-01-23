import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { PhotoDetailView } from './PhotoDetailView';
import { Photo } from '../../../../common/types';

const mockPhoto: Photo = {
  id: 2014422,
  width: 3024,
  height: 3024,
  url: 'https://www.pexels.com/photo/brown-rocks-during-golden-hour-2014422/',
  photographer: 'Joey Farina',
  photographer_url: 'https://www.pexels.com/@joey',
  photographer_id: 680589,
  avg_color: '#978E82',
  src: {
    original: 'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg',
    large2x:
      'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    large: 'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    medium: 'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=350',
    small: 'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=130',
    portrait:
      'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
    landscape:
      'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    tiny: 'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
  },
  liked: false,
  alt: 'Brown Rocks During Golden Hour',
};

describe('PhotoDetailView', () => {
  test('renders all elements correctly', () => {
    render(<PhotoDetailView {...mockPhoto} />);

    // Check if the image is rendered with the correct alt text and srcset
    const image = screen.getByRole('img', { name: mockPhoto.alt });
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('srcSet', expect.stringContaining('500w'));
    expect(image).toHaveAttribute('srcSet', expect.stringContaining('2400w'));

    // Check if the title is rendered
    expect(screen.getByText(mockPhoto.alt)).toBeInTheDocument();

    // Check if the photographer link is rendered correctly
    const photographerLink = screen.getByRole('link', { name: mockPhoto.photographer });
    expect(photographerLink).toHaveAttribute('href', mockPhoto.photographer_url);

    // Check if the photo link is rendered correctly
    const photoLink = screen.getByRole('link', { name: 'View on Pexels' });
    expect(photoLink).toHaveAttribute('href', mockPhoto.url);

    // Check if the dimensions are rendered (handle fragmented text)
    expect(
      screen.getByText((content, element) => {
        return element?.textContent === 'Dimensions: 3024 x 3024 px';
      })
    ).toBeInTheDocument();

    // Check if the like button is rendered with the correct state
    const likeButton = screen.getByRole('button', { name: 'Like' });
    expect(likeButton).toBeInTheDocument();
  });

  test('renders like button as "Like" when not liked', () => {
    const mockPhotoNotLiked = { ...mockPhoto, liked: false };
    render(<PhotoDetailView {...mockPhotoNotLiked} />);

    const likeButton = screen.getByRole('button', { name: 'Like' });
    expect(likeButton).toBeInTheDocument();
  });

  test('renders the photographer link with correct target attributes', () => {
    render(<PhotoDetailView {...mockPhoto} />);

    const photographerLink = screen.getByRole('link', { name: mockPhoto.photographer });
    expect(photographerLink).toHaveAttribute('target', '_blank');
    expect(photographerLink).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
