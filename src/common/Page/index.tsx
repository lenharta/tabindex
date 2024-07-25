import { Core } from '@/types';
import { PageHero } from './PageHero';
import { PageMain } from './PageMain';
import { useThemeDispatch } from '@/store';
import React from 'react';

type PageProps = Core.Props<'div'> & {};

function ModeControl() {
  const dispatch = useThemeDispatch();
  return (
    <div className="tbx-page-mode-control">
      <button onClick={() => dispatch({ mode: 'light' })}>Light</button>
      <button onClick={() => dispatch({ mode: 'dark' })}>Dark</button>
    </div>
  );
}

function Page(props: PageProps) {
  const { children, ...otherProps } = props;
  return (
    <React.Fragment>
      <div className="tbx-page" {...otherProps}>
        {children}
      </div>
      <ModeControl />
    </React.Fragment>
  );
}

Page.Hero = PageHero;
Page.Main = PageMain;
Page.displayName = 'Page';
export { Page };
