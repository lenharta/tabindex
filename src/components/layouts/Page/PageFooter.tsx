import { Link } from 'react-router-dom';
import { type Factory, createStatic } from '@/components/factory';
import { useThemeCTX } from '@/core/theme';
import { Button } from '@/components/common';

export type PageFooterProps = {};

type PageFooterFactory = Factory.Config<{
  component: 'footer';
  props: PageFooterProps;
}>;

type FooterLink = { id: string; url: string; label: string };

type FooterLinkData = FooterLink[];

const FooterMenu = ({ links }: { links: FooterLinkData }) => {
  return (
    <nav className="Page-footer-menu">
      {links.map((item) => {
        const { id, label, url } = item;
        return (
          <Link key={id} id={id} to={url} className="Page-footer-menu-item">
            {label}
          </Link>
        );
      })}
    </nav>
  );
};

export const PageFooter = createStatic<PageFooterFactory>((props) => {
  const { children, ...otherProps } = props;
  const theme = useThemeCTX();

  return (
    <footer {...otherProps} className="Page-footer">
      {children}
      <FooterMenu
        links={[
          { id: 'home_link', url: '/', label: 'Home' },
          { id: 'sandbox_link', url: '/sandbox', label: 'Sandbox' },
          { id: 'toolbox_link', url: '/toolbox', label: 'Toolbox' },
          { id: 'wireframe_link', url: '/wireframe', label: 'Wireframe' },
        ]}
      />
      <Button onClick={theme.toggle}>Change Mode</Button>
    </footer>
  );
});

PageFooter.displayName = '@TBDX/Page.Footer';
