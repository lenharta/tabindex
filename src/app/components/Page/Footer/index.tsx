import clsx from 'clsx';
import React from 'react';
import { keys } from '@/utils';
import { Divider, Link } from '@/common';

export interface PageFooterProps {
  className?: string | undefined;
}

const footerRouteLinks = [
  { id: 'nav-link-home', value: '/', label: 'Home' },
  { id: 'nav-link-guide', value: '/guide', label: 'Guide' },
  { id: 'nav-link-checklist', value: '/checklist', label: 'Checklist' },
  { id: 'nav-link-demo', value: '/demo', label: 'Demo' },
];

const footerNavigationLinks = [
  { value: '/', id: 'nav-guide-alert', label: 'Alerts' },
  { value: '/', id: 'nav-guide-icon', label: 'Icons' },
  { value: '/', id: 'nav-guide-link', label: 'Links' },
  { value: '/', id: 'nav-guide-breadcrumb', label: 'Breadcrumb' },
  { value: '/', id: 'nav-guide-pagination', label: 'Pagination' },
];

const footerGuideStructureLinks = [
  { value: '/', id: 'nav-guide-list', label: 'Lists' },
  { value: '/', id: 'nav-guide-card', label: 'Cards' },
  { value: '/', id: 'nav-guide-modal', label: 'Modals' },
  { value: '/', id: 'nav-guide-collection', label: 'Collections' },
];

const footerGuideFormLinks = [
  { value: '/', id: 'nav-guide-button', label: 'Buttons' },
  { value: '/', id: 'nav-guide-checkbox', label: 'Checkbox' },
  { value: '/', id: 'nav-guide-combobox', label: 'Combobox' },
  { value: '/', id: 'nav-guide-range', label: 'Range' },
  { value: '/', id: 'nav-guide-search', label: 'Searchbox' },
];

const footerLinkGroups = {
  Routes: footerRouteLinks,
  Forms: footerGuideFormLinks,
  Navigation: footerNavigationLinks,
  Structure: footerGuideStructureLinks,
};

const PageFooterBranding: React.FC<{}> = () => {
  return (
    <div className="Page-footer-branding">
      <Link
        to="/"
        className="Page-footer-branding-logo"
        aria-label="tabindex footer logo"
        children={<span>Icon</span>}
      />
    </div>
  );
};

const PageFooterNav: React.FC<{}> = () => {
  return (
    <nav className="Page-footer-nav">
      {keys(footerLinkGroups).map((group) => {
        return (
          <div key={group} className="Page-footer-nav-group">
            <Divider label={group} />
            <Link.Group role="list" orientation="vertical">
              {footerLinkGroups[group].map((item) => (
                <Link
                  id={item.id}
                  to={item.value}
                  key={group + item.id}
                  aria-label={item.label}
                  children={item.label}
                  role="listitem"
                />
              ))}
            </Link.Group>
          </div>
        );
      })}
    </nav>
  );
};

type PageFooterComponent = React.FC<PageFooterProps> & {
  Branding: typeof PageFooterBranding;
  Nav: typeof PageFooterNav;
};

export const PageFooter: PageFooterComponent = (props) => {
  const { className } = props;
  return (
    <footer className={clsx('Page-footer', className)}>
      <div className="Page-footer-content">
        <PageFooter.Branding />
        <PageFooter.Nav />
      </div>
    </footer>
  );
};

PageFooter.Nav = PageFooterNav;
PageFooter.Branding = PageFooterBranding;
PageFooter.displayName = 'component/Page.Footer';
