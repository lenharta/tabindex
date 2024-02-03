import { useThemeCTX } from '@/app/store';
import { Button, Link } from '@/components/common';

type SiteMapGroupType = (props: {
  title: string;
  items: { to: string; label: string }[];
}) => JSX.Element;

const SiteMapGroup: SiteMapGroupType = (props) => {
  const { title, items } = props;
  return (
    <div className="tbdx-sitemap-group">
      <div className="tbdx-sitemap-group-title">{title}</div>
      <div className="tbdx-sitemap-group-divider" />
      <div className="tbdx-sitemap-group-content">
        {items.map(({ to, label }) => {
          return (
            <Link to={to} key={to}>
              {label}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

const ModeController = () => {
  const ctx = useThemeCTX();
  const { mode, setModeToggle } = ctx;
  const modeLabel = mode === 'light' ? 'Set Dark Mode' : 'Set Light Mode';
  return (
    <Button
      accent="blue"
      id="mode-control-button"
      className="tbdx-mode-control"
      onClick={() => setModeToggle()}
      children={modeLabel}
    />
  );
};

export const PageFooter = () => (
  <footer className="tbdx-page-footer">
    <div className="tbdx-sitemap">
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
          { to: '/toolbox/accent', label: 'Accent Colors' },
          { to: '/toolbox/surface', label: 'Surface Colors' },
          { to: '/toolbox/button', label: 'Button Gallery' },
          { to: '/toolbox/switch', label: 'Switch Gallery' },
          { to: '/toolbox/checkbox', label: 'Checkbox Gallery' },
        ]}
      />
    </div>
    <div className="tbdx-global-controls">
      <ModeController />
    </div>
  </footer>
);
