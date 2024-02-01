import { Link, Title } from '@/components/common';

type SiteMapGroupProps = {
  children: React.ReactNode;
  title: string;
};

const SiteMapGroup = (props: SiteMapGroupProps) => {
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

const SiteMap = () => {
  return (
    <section className="tbdx-sitemap">
      <Title className="tbdx-sitemap-title">Site Map</Title>
      <div className="tbdx-sitemap-container">
        <SiteMapGroup title="Toolbox">
          <Link to="/toolbox">Overview</Link>
          <Link to="/toolbox/accent">Accent Colors</Link>
          <Link to="/toolbox/surface">Surface Colors</Link>
          <Link to="/toolbox/button">Button & Group</Link>
        </SiteMapGroup>
        <SiteMapGroup title="Sandbox">
          <Link to="/sandbox">Overview</Link>
          <Link to="/sandbox/button">Button</Link>
          <Link to="/sandbox/checkbox">Checkbox</Link>
        </SiteMapGroup>
      </div>
    </section>
  );
};

export const PageFooter = () => {
  return (
    <footer className="tbdx-page-footer">
      <SiteMap />
    </footer>
  );
};
