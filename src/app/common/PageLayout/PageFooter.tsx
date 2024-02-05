import { useThemeCTX } from '@/app/store';
import { Button, Link } from '@/components/common';
import { type CORE, createBasicFactory } from '@/components/factory';

export interface PageFooterProps {}

export type PageFooterFactory = CORE.Factory<{
  ref: HTMLDivElement;
  props: PageFooterProps;
  component: 'footer';
}>;

export const ModeControl = () => {
  const ctx = useThemeCTX();
  const label = ctx.mode === 'light' ? 'Go Dark Mode' : 'Go Light Mode';
  return (
    <Button
      id="mode-control-button"
      className="tbdx-mode-control"
      onClick={() => ctx.setModeToggle()}
      children={label}
      accent="blue"
    />
  );
};

interface SiteMapGroupProps {
  title: string;
  items: { to: string; label: string }[];
}

const SiteMapGroup = (props: SiteMapGroupProps) => {
  const { title, items } = props;
  return (
    <div className="tbdx-sitemap-group">
      <div className="tbdx-sitemap-group-title">{title}</div>
      <div className="tbdx-sitemap-group-divider" />
      <div className="tbdx-sitemap-group-content">
        {items.map(({ to, label }) => (
          <Link to={to} key={to}>
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
};

const SiteMap = (props: { children: React.ReactNode }) => (
  <div className="tbdx-sitemap">{props.children}</div>
);

export const PageFooter = createBasicFactory<PageFooterFactory>((props) => {
  const { component: Component = 'footer', children, ...otherProps } = props;
  return (
    <Component {...otherProps} className="tbdx-page-footer">
      <SiteMap>
        <SiteMapGroup
          title="Overview"
          items={[
            { to: '/', label: 'Home' },
            { to: '/learn', label: 'Learn' },
            { to: '/toolbox', label: 'Toolbox' },
            { to: '/sandbox', label: 'Sandbox' },
          ]}
        />
        <SiteMapGroup
          title="Toolbox"
          items={[
            { to: '/toolbox/card', label: 'Card Gallery' },
            { to: '/toolbox/radio', label: 'Radio Gallery' },
            { to: '/toolbox/button', label: 'Button Gallery' },
            { to: '/toolbox/switch', label: 'Switch Gallery' },
            { to: '/toolbox/checkbox', label: 'Checkbox Gallery' },
            { to: '/toolbox/surface', label: 'Surface Colors' },
            { to: '/toolbox/accent', label: 'Accent Colors' },
          ]}
        />
      </SiteMap>
      <div className="tbdx-global-controls">
        <ModeControl />
      </div>
    </Component>
  );
});
