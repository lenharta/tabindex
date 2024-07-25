import * as React from 'react';
import { Core } from '@/types';
import { PageMain } from './PageMain';
import { PageHero } from './PageHero';

type PageProps = Core.Props<'div'> & {};

function Page(props: PageProps) {
  const { children, ...otherProps } = props;
  return (
    <React.Fragment>
      <div className="tbx-page" {...otherProps}>
        {children}
      </div>
    </React.Fragment>
  );
}

Page.Hero = PageHero;
Page.Main = PageMain;
Page.displayName = 'Components.Page';
export { Page };
