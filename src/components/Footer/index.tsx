import { Core } from '@/types';

type FooterProps = Core.Props<'footer'> & {};

function Footer(props: FooterProps) {
  const { children, ...otherProps } = props;
  return (
    <footer className="tbx-footer" {...otherProps}>
      {children}
    </footer>
  );
}

Footer.displayName = 'Footer';
export { Footer };
