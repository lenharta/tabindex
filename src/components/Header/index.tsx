import { Core } from '@/types';

type HeaderProps = Core.Props<'header'> & {};

function Header(props: HeaderProps) {
  const { children, ...otherProps } = props;
  return (
    <header className="tbx-header" {...otherProps}>
      {children}
    </header>
  );
}

Header.displayName = 'Components.Header';
export { Header };
