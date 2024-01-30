import { Link, Title } from '@/components/common';

const toolboxLinks = {
  accent: { label: 'Accent Colors', url: '/toolbox/accent' },
  surface: { label: 'Surface Colors', url: '/toolbox/surface' },
};

const sandboxLinks = {
  button: { label: 'Button', url: '/toolbox/button' },
  checkbox: { label: 'Checkbox', url: '/toolbox/checkbox' },
};

const SiteMap = (props: { children: React.ReactNode }) => {
  const { children } = props;
  return (
    <section className="tbdx-sitemap">
      <Title h3>Site Map</Title>
      <div className="tbdx-sitemap-container">{children}</div>
    </section>
  );
};

const SiteMapGroup = (props: { title: string; children: React.ReactNode }) => {
  const { title, children } = props;
  return (
    <div className="tbdx-sitemap-group">
      <header>
        <div className="tbdx-sitemap-group-title">{title}</div>
        <div className="tbdx-sitemap-group-divider" />
      </header>
      {children}
    </div>
  );
};

export type PageFooterProps = {};

export const PageFooter = (props: PageFooterProps) => {
  const {} = props;
  return (
    <footer className="PageFooter">
      <SiteMap>
        <SiteMapGroup title="Toolbox">
          <Link to="/toolbox/accent">Accent Colors</Link>
          <Link to="/toolbox/surface">Surface Colors</Link>
        </SiteMapGroup>
        <SiteMapGroup title="Sandbox">
          <Link to="/sandbox/button">Button</Link>
          <Link to="/sandbox/checkbox">Checkbox</Link>
        </SiteMapGroup>
      </SiteMap>
    </footer>
  );
};
