import { ChangeEvent, FC } from 'react';
import { Input, SearchInputWrapper } from './SearchInput.styles.ts';

interface SearchInputProps {
  placeholder: string;
  onSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchInput: FC<SearchInputProps> = ({ placeholder, onSearchChange }) => {
  return (
    <SearchInputWrapper>
      <Input type='text' placeholder={placeholder} onChange={onSearchChange} />
    </SearchInputWrapper>
  );
};
