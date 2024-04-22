import React from 'react';

export interface PageSectionProps {
  children?: React.ReactNode | undefined;
}

export type PageSectionComponent = React.FC<PageSectionProps>;

export const PageSection: PageSectionComponent = (props) => {
  const { children } = props;

  return (
    <section className="Page-section">
      <React.Fragment>{children}</React.Fragment>
    </section>
  );
};

PageSection.displayName = 'app/Page.Section';
