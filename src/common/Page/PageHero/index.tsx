import React from 'react';
import { TBDX } from '@/types';
import { PREFIX } from '@/config';

const css = {
  root: `${PREFIX}-page-hero`,
  layout: `${PREFIX}-page-hero-layout`,
};

type PageHeroProps = Omit<TBDX.ElementProps<'section'>, 'title'> & {
  title?: React.ReactNode | undefined;
};

function PageHero(props: PageHeroProps) {
  const { title = null, children, ...otherProps } = props;
  return (
    <section className={css.root} {...otherProps}>
      <div className={css.layout}>
        <React.Fragment>{title}</React.Fragment>
        <React.Fragment>{children}</React.Fragment>
      </div>
    </section>
  );
}

PageHero.displayName = 'Page.Hero';
export { PageHero, type PageHeroProps };
