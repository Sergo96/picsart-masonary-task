import { act } from 'react';
import { render } from '@testing-library/react';

import { useDebouncedValue } from './useDebouncedValue';

const TestComponent = ({ value, delay }: { value: string; delay: number }) => {
  const debouncedValue = useDebouncedValue(value, delay);
  return <div data-testid='debounced-value'>{debouncedValue}</div>;
};

describe('useDebouncedValue', () => {
  it('should return the initial value immediately', () => {
    const { getByTestId } = render(<TestComponent value='initial' delay={500} />);
    expect(getByTestId('debounced-value').textContent).toBe('initial');
  });

  it('should update the debounced value after the delay', () => {
    jest.useFakeTimers();

    const { getByTestId, rerender } = render(<TestComponent value='initial' delay={500} />);

    rerender(<TestComponent value='updated' delay={500} />);

    // Value should remain the same before the delay
    expect(getByTestId('debounced-value').textContent).toBe('initial');

    act(() => {
      jest.advanceTimersByTime(500);
    });

    // Value should update after the delay
    expect(getByTestId('debounced-value').textContent).toBe('updated');

    jest.useRealTimers();
  });
});
