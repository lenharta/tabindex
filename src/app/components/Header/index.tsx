import { Logo } from '../Logo';
import { Menu } from '../Menu';
import { Search } from '../Search';
import { SkipTo } from '../SkipTo';

export interface HeaderProps {}

export type HeaderComponent = React.FC<HeaderProps> & {
  Logo: typeof Logo;
  Menu: typeof Menu;
  Search: typeof Search;
  SkipTo: typeof SkipTo;
};

export const Header: HeaderComponent = ({}) => {
  return (
    <header className="Header">
      <Header.Menu />
      <Header.Logo />
      <Header.SkipTo />
      <Header.Search />
    </header>
  );
};

Header.displayName = 'app/Header';
Header.SkipTo = SkipTo;
Header.Search = Search;
Header.Menu = Menu;
Header.Logo = Logo;
