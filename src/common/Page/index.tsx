import React from 'react';
import { TBDX } from '@/types';
import { PREFIX } from '@/config';
import { PageMain } from './PageMain';
import { PageHero } from './PageHero';

type PageProps = TBDX.ElementProps<'div'> & {};

const css = {
  root: `${PREFIX}-page`,
};

function Page(props: PageProps) {
  const { children, ...otherProps } = props;
  return (
    <div className={css.root} {...otherProps}>
      <React.Fragment>{children}</React.Fragment>
    </div>
  );
}

Page.Hero = PageHero;
Page.Main = PageMain;
Page.displayName = 'Page';
export { Page, type PageProps };
