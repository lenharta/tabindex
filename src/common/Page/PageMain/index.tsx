import React from 'react';
import { TBDX } from '@/types';
import { PREFIX } from '@/config';

type PageMainProps = TBDX.ElementProps<'main'> & {};

const css = {
  root: `${PREFIX}-page-main`,
};

function PageMain(props: PageMainProps) {
  const { children, ...otherProps } = props;
  return (
    <main className={css.root} id="main_content" {...otherProps}>
      <React.Fragment>{children}</React.Fragment>
    </main>
  );
}

PageMain.displayName = 'Page.Main';
export { PageMain, type PageMainProps };
