import { Logo } from '../Logo';
import { Search } from '../Search';
import { SkipTo } from '../SkipTo';

export interface HeaderProps {}

export type HeaderComponent = React.FC<HeaderProps> & {
  Logo: typeof Logo;
  Search: typeof Search;
  SkipTo: typeof SkipTo;
};

export const Header: HeaderComponent = ({}) => {
  return (
    <header className="Header">
      <Header.Logo />
      <Header.SkipTo />
      <Header.Search />
    </header>
  );
};

Header.displayName = 'app/Header';
Header.SkipTo = SkipTo;
Header.Search = Search;
Header.Logo = Logo;
