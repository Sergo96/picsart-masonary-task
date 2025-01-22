import { useState, useEffect, useMemo } from 'react';
import debounce from 'lodash.debounce';

/**
 * Hook to debounce a value.
 *
 * @param value - The value to debounce.
 * @param delay - The debounce delay in milliseconds.
 * @returns The debounced value.
 */
export function useDebouncedValue<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  // Memoize the debounced function to prevent it from being recreated on each render
  const debouncedSetter = useMemo(
    () =>
      debounce((newValue: T) => {
        setDebouncedValue(newValue);
      }, delay),
    [delay]
  );

  useEffect(() => {
    debouncedSetter(value);

    return () => {
      debouncedSetter.cancel();
    };
  }, [value, debouncedSetter]);

  return debouncedValue;
}
