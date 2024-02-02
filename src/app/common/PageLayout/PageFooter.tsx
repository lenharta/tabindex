import { Link } from '@/components/common';

type SiteMapGroupProps = {
  children: React.ReactNode;
  title: string;
};

const SiteMapGroup = (props: SiteMapGroupProps) => {
  const { title, children } = props;
  return (
    <div className="tbdx-sitemap-group">
      <div className="tbdx-sitemap-group-title">{title}</div>
      <div className="tbdx-sitemap-group-divider" />
      <div className="tbdx-sitemap-group-content">{children}</div>
    </div>
  );
};

const SiteMap = () => {
  return (
    <section className="tbdx-sitemap">
      <SiteMapGroup title="Global">
        <Link to="/">Landing Page</Link>
        <Link to="/toolbox">Toolbox Page</Link>
        <Link to="/sandbox">Surface Page</Link>
      </SiteMapGroup>
      <SiteMapGroup title="Theme">
        <Link to="/toolbox/accent">Accent Colors</Link>
        <Link to="/toolbox/surface">Surface Colors</Link>
      </SiteMapGroup>
      <SiteMapGroup title="Components">
        <Link to="/toolbox/button">Button</Link>
        <Link to="/toolbox/switch">Switch</Link>
        <Link to="/toolbox/checkbox">Checkbox</Link>
      </SiteMapGroup>
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
