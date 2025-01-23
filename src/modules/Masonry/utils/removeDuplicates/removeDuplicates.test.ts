import { removeDuplicates } from './removeDuplicates'; // Update the path as needed

describe('removeDuplicates', () => {
  it('should remove duplicates based on the specified key', () => {
    const input = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
      { id: 1, name: 'Alice' }, // Duplicate by id
      { id: 3, name: 'Charlie' },
    ];

    const expectedOutput = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
      { id: 3, name: 'Charlie' },
    ];

    expect(removeDuplicates(input, 'id')).toEqual(expectedOutput);
  });

  it('should handle an empty array gracefully', () => {
    const input: Array<{ id: number; name: string }> = [];
    expect(removeDuplicates(input, 'id')).toEqual([]);
  });

  it('should return the same array if no duplicates are present', () => {
    const input = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
      { id: 3, name: 'Charlie' },
    ];

    expect(removeDuplicates(input, 'id')).toEqual(input);
  });

  it('should work with other keys for uniqueness', () => {
    const input = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
      { id: 3, name: 'Alice' }, // Duplicate by name
    ];

    const expectedOutput = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
    ];

    expect(removeDuplicates(input, 'name')).toEqual(expectedOutput);
  });

  it('should handle non-string keys correctly', () => {
    const input = [
      { id: 1, value: 10 },
      { id: 2, value: 20 },
      { id: 3, value: 10 }, // Duplicate by value
    ];

    const expectedOutput = [
      { id: 1, value: 10 },
      { id: 2, value: 20 },
    ];

    expect(removeDuplicates(input, 'value')).toEqual(expectedOutput);
  });

  it('should handle arrays with objects that have missing keys gracefully', () => {
    const input = [
      { id: 1, name: 'Alice' },
      { name: 'Bob' }, // Missing 'id' key
      { id: 1, name: 'Alice' },
    ];

    const expectedOutput = [{ id: 1, name: 'Alice' }, { name: 'Bob' }];

    expect(removeDuplicates(input, 'id')).toEqual(expectedOutput);
  });
});
