import clsx from 'clsx';
import React from 'react';
import { Link } from 'react-router-dom';

export interface PageFooterProps {
  className?: string | undefined;
}

const footerNavData = [
  { id: 'nav-link-home', value: '/', label: 'Home' },
  { id: 'nav-link-demo', value: '/demo', label: 'Demo' },
  { id: 'nav-link-guide', value: '/guide', label: 'Guide' },
  { id: 'nav-link-checklist', value: '/checklist', label: 'Checklist' },
];

export const PageFooter: React.FC<PageFooterProps> = (props) => {
  const { className } = props;
  return (
    <footer className={clsx('Page-footer', className)}>
      <div className="Page-footer-branding">
        <Link
          to="/"
          className="Page-footer-branding-logo"
          aria-label="tabindex footer logo"
          children={<span>Icon</span>}
        />
      </div>

      <nav className="Page-footer-nav">
        <ul className="Page-footer-nav-list">
          {footerNavData.map((item) => (
            <li key={item.id} className="Page-footer-nav-item">
              <Link id={item.id} to={item.value} children={item.label} aria-label={item.label} />
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};

PageFooter.displayName = 'component/Page.Footer';
