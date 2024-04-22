import React from 'react';
import { keys } from '@/utils';
import { Divider, Link } from '@/common';

interface FooterItem {
  value: string;
  label: string;
  id: string;
}

interface FooterGroupProps {
  items: FooterItem[];
  group: string;
}

const footerGroupData: Record<string, FooterItem[]> = {
  Routes: [
    { id: 'nav-link-home', value: '/', label: 'Home' },
    { id: 'nav-link-demo', value: '/demo', label: 'Demo' },
    { id: 'nav-link-guide', value: '/guide', label: 'Guide' },
    { id: 'nav-link-anatomy', value: '/anatomy', label: 'Anatomy' },
    { id: 'nav-link-checklist', value: '/checklist', label: 'Checklist' },
  ],
  Forms: [
    { id: 'nav-guide-combobox', value: '/', label: 'Combo Box' },
    { id: 'nav-guide-search', value: '/', label: 'Search Box' },
    { id: 'nav-guide-checkbox', value: '/', label: 'Checkbox' },
    { id: 'nav-guide-button', value: '/', label: 'Buttons' },
    { id: 'nav-guide-range', value: '/', label: 'Range' },
  ],
  Navigation: [
    { id: 'nav-guide-breadcrumb', value: '/', label: 'Breadcrumb' },
    { id: 'nav-guide-pagination', value: '/', label: 'Pagination' },
    { id: 'nav-guide-alert', value: '/', label: 'Alerts' },
    { id: 'nav-guide-icon', value: '/', label: 'Icons' },
    { id: 'nav-guide-link', value: '/', label: 'Links' },
  ],
  Structure: [
    { id: 'nav-guide-collection', value: '/', label: 'Collections' },
    { id: 'nav-guide-modal', value: '/', label: 'Modals' },
    { id: 'nav-guide-card', value: '/', label: 'Cards' },
    { id: 'nav-guide-list', value: '/', label: 'Lists' },
  ],
};

const FooterBrand: React.FC<{}> = ({}) => (
  <div className="Page-footer-Brand">
    <Link
      to="/"
      className="Page-footer-Brand-logo"
      aria-label="tabindex footer logo"
      children={<span>Icon</span>}
    />
  </div>
);

export const FooterGroup = ({ group, items }: FooterGroupProps) => (
  <div key={group} className="Page-footer-nav-group">
    <Divider label={group} />
    <Link.Group role="list" orientation="vertical">
      {items.map((item) => (
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

const FooterNav: React.FC<{}> = ({}) => (
  <nav className="Page-footer-nav">
    {keys(footerGroupData).map((group) => (
      <FooterGroup group={group} items={footerGroupData[group]} />
    ))}
  </nav>
);

type PageFooterComponent = React.FC<{}> & {
  Brand: typeof FooterBrand;
  Nav: typeof FooterNav;
};

export const PageFooter: PageFooterComponent = ({}) => (
  <footer className="Page-footer">
    <PageFooter.Brand />
    <PageFooter.Nav />
  </footer>
);

PageFooter.Nav = FooterNav;
PageFooter.Brand = FooterBrand;

PageFooter.displayName = 'app/Page.Footer';
PageFooter.Nav.displayName = 'app/Page.Footer.Nav';
PageFooter.Brand.displayName = 'app/Page.Footer.Brand';
