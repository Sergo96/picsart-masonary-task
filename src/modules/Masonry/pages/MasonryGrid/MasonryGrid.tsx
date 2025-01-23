import { JSX, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useGetPhotosQuery, useItemsPerRow } from '../../hooks';
import { removeDuplicates } from '../../utils/removeDuplicates/removeDuplicates';
import { Spinner } from '../../../../common/components';
import { generatePath, useNavigate, useSearchParams } from 'react-router-dom';
import { mainRoutes } from '../../../../common/constants';
import { Container, Grid, GridItem, Placeholder, Image } from './Masonry.styles';
import { UseItemsPerRowParams } from '../../hooks/useItemsRow/useItemsRow';

export const MasonryGrid: () => JSX.Element = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const previousScrollTopRef = useRef(0);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('search') || 'nature';
  const navigate = useNavigate();
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isFetching } = useGetPhotosQuery({
    query,
  });
  const [visibleItems, setVisibleItems] = useState({ start: 0, end: 40 });
  const itemHeight = 300;
  const itemWidth = 250;
  const itemPadding = 16;

  const itemsPerRow = useItemsPerRow({ containerRef, itemPadding, itemWidth } as UseItemsPerRowParams);

  const allPhotos = useMemo(() => data?.pages.flatMap((page) => page.photos) || [], [data]);
  const totalRows = Math.ceil(allPhotos.length / itemsPerRow); // Calculate total rows in the grid

  const handleScroll = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const { scrollTop, scrollHeight, clientHeight } = container;

    // Determine if fetching is needed
    if (scrollTop > previousScrollTopRef.current) {
      if (scrollHeight - (scrollTop + clientHeight) < 100 && hasNextPage && !isFetchingNextPage) {
        void fetchNextPage();
      }
    }

    previousScrollTopRef.current = scrollTop;

    // Calculate visible range
    const totalItems = allPhotos.length;
    const startRow = Math.max(0, Math.floor(scrollTop / (itemHeight + itemPadding)) - 2); // Add buffer rows
    const endRow = Math.min(totalRows, Math.ceil((scrollTop + clientHeight) / (itemHeight + itemPadding)) + 2);
    const startIndex = startRow * itemsPerRow;
    const endIndex = Math.min(totalItems, endRow * itemsPerRow);

    setVisibleItems({ start: startIndex, end: endIndex });
  }, [
    allPhotos.length,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    itemHeight,
    itemPadding,
    itemsPerRow,
    totalRows,
  ]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onScroll = () => requestAnimationFrame(handleScroll);
    container.addEventListener('scroll', onScroll);
    return () => container.removeEventListener('scroll', onScroll);
  }, [handleScroll]);

  const visiblePhotos = useMemo(
    () => removeDuplicates(allPhotos.slice(visibleItems.start, visibleItems.end), 'id'),
    [allPhotos, visibleItems]
  );

  const topPlaceholderHeight = useMemo(
    () => (visibleItems.start / itemsPerRow) * (itemHeight + itemPadding),
    [visibleItems.start, itemsPerRow, itemHeight, itemPadding]
  );

  const bottomPlaceholderHeight = useMemo(
    () => ((totalRows - Math.ceil(visibleItems.end / itemsPerRow)) * (itemHeight + itemPadding)) / 2,
    [totalRows, visibleItems.end, itemsPerRow, itemHeight, itemPadding]
  );

  return (
    <Container ref={containerRef} $itemPadding={itemPadding}>
      {/* Top placeholder */}
      <Placeholder $height={topPlaceholderHeight} />

      {/* Visible grid */}
      <Grid $itemWidth={itemWidth} $itemPadding={itemPadding}>
        {visiblePhotos.map((photo) => (
          <GridItem key={photo.id} $itemHeight={itemHeight}>
            <Image
              src={photo.src.medium}
              srcSet={`
                ${photo.src.tiny} 280w,
                ${photo.src.small} 130w,
                ${photo.src.medium} 350w,
                ${photo.src.large} 650w,
                ${photo.src.large2x} 940w,
                `}
              sizes='(max-width: 280px) 280px,
               (max-width: 130px) 130px,
               (max-width: 350px) 350px,
               (max-width: 650px) 650px,
               100vw'
              alt={photo.alt || 'Photo'}
              onClick={() => {
                navigate(generatePath<string>(mainRoutes.photoDetailPage, { id: photo.id }));
              }}
            />
          </GridItem>
        ))}
      </Grid>

      {(isFetchingNextPage || isFetching) && (
        <center>
          <Spinner />
        </center>
      )}

      {/* Bottom placeholder */}
      <Placeholder $height={bottomPlaceholderHeight} />
    </Container>
  );
};
