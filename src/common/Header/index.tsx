import React from 'react';
import { TBDX } from '@/types';
import { PREFIX } from '@/config';

const css = {
  root: `${PREFIX}-header`,
};

type HeaderProps = TBDX.ElementProps<'header'> & {};

function Header(props: HeaderProps) {
  const { children, ...otherProps } = props;
  return (
    <header className={css.root} {...otherProps}>
      <React.Fragment>{children}</React.Fragment>
    </header>
  );
}

Header.displayName = 'App.Header';
export { Header, type HeaderProps };
