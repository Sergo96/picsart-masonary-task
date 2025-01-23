import Header, { HeaderProps } from '../Header/Header';
import { ChangeEvent, FC, PropsWithChildren, useEffect, useState } from 'react';
import { useDebouncedValue } from '../../hooks';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

type LayoutProps = Pick<HeaderProps, 'headerType'>;

export const MasonryLayout: FC<PropsWithChildren<LayoutProps>> = ({ children, headerType }) => {
  const navigate = useNavigate(); // Used to change the URL
  const [searchParams] = useSearchParams();

  const { search: queryParam } = useLocation(); // Get the current query from the URL
  const [search, setSearch] = useState(searchParams.get('search') ?? 'nature');
  const debouncedSearch = useDebouncedValue(search, 500);

  // Set search state from the URL on initial load or refresh
  useEffect(() => {
    const urlSearchParams = new URLSearchParams(queryParam);
    const query = urlSearchParams.get('search') || ''; // Default to empty string if no search param
    setSearch(query);
  }, [queryParam]); // Run this effect whenever the queryParam changes

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    navigate(`?search=${debouncedSearch}`, { replace: true });
  }, [debouncedSearch]);

  return (
    <>
      <Header onSearchChange={handleSearchChange} headerType={headerType} />
      {children}
    </>
  );
};
