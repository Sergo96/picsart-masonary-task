// BackButton.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { BackButton } from './BackButton';
import { useNavigate } from 'react-router-dom';

// Mock useNavigate hook
jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('BackButton', () => {
  it('should navigate back when clicked', () => {
    const mockNavigate = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);

    // Render the component
    render(<BackButton />);

    // Find the BackButtonWrapper element and simulate a click
    const backButton = screen.getByRole('button');
    fireEvent.click(backButton);

    // Assert that the navigate function was called with -1
    expect(mockNavigate).toHaveBeenCalledWith(-1);
  });
});
