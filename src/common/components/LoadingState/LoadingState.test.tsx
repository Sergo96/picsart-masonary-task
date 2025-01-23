import { render, screen } from '@testing-library/react';
import { LoadingState } from './LoadingState';

describe('LoadingState', () => {
  it('should render the overlay', () => {
    render(<LoadingState />);

    // Check if the overlay is in the document
    const overlayElement = screen.getByTestId('overlay');
    expect(overlayElement).toBeInTheDocument();
  });
});
