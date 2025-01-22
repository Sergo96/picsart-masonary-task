type ObjectWithKey = Record<string, any>;

/**
 * Removes duplicate objects from an array based on a specified key.
 *
 * @param arr - The array of objects to deduplicate.
 * @param key - The key used to determine uniqueness.
 * @returns A new array with duplicates removed.
 */
export function removeDuplicates<T extends ObjectWithKey>(arr: T[], key: keyof T): T[] {
  const unique = new Map<string, T>();
  arr.forEach((item) => {
    const uniqueKey = String(item[key]);
    if (!unique.has(uniqueKey)) {
      unique.set(uniqueKey, item);
    }
  });
  return Array.from(unique.values());
}
