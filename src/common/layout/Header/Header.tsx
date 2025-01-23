import { ChangeEvent, FC } from 'react';
import { HeaderContainer, HeaderLeft, Icon } from './Header.styles';
import { BackButton, SearchInput } from '../../components';

type HeaderType = 'search' | 'info';
export type HeaderProps = {
  onSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
  headerType: HeaderType;
};

export const Header: FC<HeaderProps> = ({ onSearchChange, headerType }) => {
  return (
    <HeaderContainer>
      <HeaderLeft>
        {headerType === 'search' ? (
          <>
            <Icon>🔍</Icon>
            <SearchInput placeholder='Search...' onSearchChange={onSearchChange} />
          </>
        ) : (
          <>
            <BackButton />
          </>
        )}
      </HeaderLeft>
    </HeaderContainer>
  );
};

export default Header;
