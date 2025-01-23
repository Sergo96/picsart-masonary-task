import { render, screen, fireEvent } from '@testing-library/react';
import { SearchInput } from './SearchInput';

describe('SearchInput', () => {
  it('should render the input with the correct placeholder', () => {
    const placeholderText = 'Search here';
    const mockOnSearchChange = jest.fn();

    render(<SearchInput placeholder={placeholderText} onSearchChange={mockOnSearchChange} />);

    // Check if the input element is in the document with the correct placeholder
    const inputElement = screen.getByPlaceholderText(placeholderText);
    expect(inputElement).toBeInTheDocument();
  });

  it('should call onSearchChange when typing in the input', () => {
    const mockOnSearchChange = jest.fn();
    const placeholderText = 'Search here';

    render(<SearchInput placeholder={placeholderText} onSearchChange={mockOnSearchChange} />);

    const inputElement = screen.getByPlaceholderText(placeholderText);

    // Simulate typing in the input field
    fireEvent.change(inputElement, { target: { value: 'New search query' } });

    // Check if the mock function is called
    expect(mockOnSearchChange).toHaveBeenCalledTimes(1);
  });
});
