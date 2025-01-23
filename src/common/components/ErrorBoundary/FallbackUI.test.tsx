import { render, screen, fireEvent } from '@testing-library/react';
import { FallbackUI } from './FallbackUI';

// Mock the window.location.reload function
beforeAll(() => {
  // Use Object.defineProperty to mock window.location.reload
  Object.defineProperty(window, 'location', {
    value: { reload: jest.fn() },
    writable: true,
  });
});

describe('FallbackUI', () => {
  it('should render the correct UI elements', () => {
    render(<FallbackUI />);

    // Check if the Heading text is rendered
    const headingElement = screen.getByText('Something went wrong!');
    expect(headingElement).toBeInTheDocument();

    // Check if the Message text is rendered
    const messageElement = screen.getByText('We’re sorry, but an unexpected error occurred. Please try again.');
    expect(messageElement).toBeInTheDocument();

    // Check if the Retry button is rendered
    const retryButtonElement = screen.getByText('Retry');
    expect(retryButtonElement).toBeInTheDocument();
  });

  it('should call window.location.reload when Retry button is clicked', () => {
    render(<FallbackUI />);

    // Get the Retry button
    const retryButtonElement = screen.getByText('Retry');

    // Simulate the button click
    fireEvent.click(retryButtonElement);

    // Verify that window.location.reload is called
    expect(window.location.reload).toHaveBeenCalled();
  });
});
