import clsx from 'clsx';
import React from 'react';

export interface PageHeroProps {
  children?: React.ReactNode | undefined;
  className?: string | undefined;
}

export const PageHero: React.FC<PageHeroProps> = (props) => {
  const { children, className } = props;
  return (
    <section className={clsx('page-hero', className)}>
      <React.Fragment>{children}</React.Fragment>
    </section>
  );
};

PageHero.displayName = 'app/Page.Hero';
