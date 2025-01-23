import { ChangeEvent, JSX } from 'react';
import { Input, SearchInputWrapper } from './SearchInput.styles';

interface SearchInputProps {
  placeholder: string;
  onSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchInput: ({ placeholder, onSearchChange }: SearchInputProps) => JSX.Element = ({
  placeholder,
  onSearchChange,
}) => {
  return (
    <SearchInputWrapper>
      <Input type='text' placeholder={placeholder} onChange={onSearchChange} />
    </SearchInputWrapper>
  );
};
