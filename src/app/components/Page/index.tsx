import React from 'react';
import { Link } from 'react-router-dom';

export interface PageProps {
  children?: React.ReactNode | undefined;
}

export type PageComponent = React.FC<PageProps> & {
  Content: React.FC<Partial<PageProps>>;
  Footer: React.FC<Partial<PageProps>>;
  Hero: React.FC<Partial<PageProps>>;
};

export const Page: PageComponent = ({ children }) => {
  return (
    <div className="Page">
      {children}
      <Page.Footer />
    </div>
  );
};

Page.Hero = ({ children }) => {
  return <div className="Page-hero">{children}</div>;
};

Page.Content = ({ children }) => {
  return (
    <main className="Page-content" id="mainContent">
      {children}
    </main>
  );
};

Page.Footer = ({}) => {
  return (
    <footer>
      <Link to="/">Home</Link>
      <Link to="/demo">Demo</Link>
      <Link to="/checklist">Checklist</Link>
    </footer>
  );
};

Page.displayName = 'app/Page';
Page.Footer.displayName = 'app/Page.Footer';
Page.Content.displayName = 'app/Page.Content';
