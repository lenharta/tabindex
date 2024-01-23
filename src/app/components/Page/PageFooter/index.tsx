import * as React from 'react';

export interface IPageFooter extends React.ComponentPropsWithoutRef<'footer'> {}

export default function PageFooter(props: IPageFooter) {
  const { children, ...otherProps } = props;
  return <footer {...otherProps}>{children}</footer>;
}
