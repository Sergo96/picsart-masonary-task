import { RefObject, useEffect, useState } from 'react';
import debounce from 'lodash.debounce';

export type UseItemsPerRowParams = {
  containerRef: RefObject<HTMLDivElement>;
  itemWidth: number;
  itemPadding: number;
};

export const useItemsPerRow = ({ containerRef, itemWidth, itemPadding }: UseItemsPerRowParams): number => {
  const [itemsPerRow, setItemsPerRow] = useState(1);

  useEffect(() => {
    const calculateItemsPerRow = () => {
      const containerWidth = containerRef.current?.offsetWidth || window.innerWidth;
      const calculatedItemsPerRow = Math.max(1, Math.floor((containerWidth - itemPadding) / (itemWidth + itemPadding)));
      setItemsPerRow(calculatedItemsPerRow);
    };

    const debouncedResize = debounce(calculateItemsPerRow, 50);

    window.addEventListener('resize', debouncedResize);
    calculateItemsPerRow(); // Initial calculation

    return () => window.removeEventListener('resize', debouncedResize);
  }, [containerRef, itemWidth, itemPadding]);

  return itemsPerRow;
};
