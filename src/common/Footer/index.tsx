import React from 'react';
import { TBDX } from '@/types';
import { PREFIX } from '@/config';

const css = {
  root: `${PREFIX}-footer`,
};

type FooterProps = TBDX.ElementProps<'footer'> & {};

function Footer(props: FooterProps) {
  const { children, ...otherProps } = props;
  return (
    <footer className={css.root} {...otherProps}>
      <React.Fragment>{children}</React.Fragment>
    </footer>
  );
}

Footer.displayName = 'App.Footer';
export { Footer, type FooterProps };
