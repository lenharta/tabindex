import * as React from 'react';

export interface IPageContent extends React.ComponentPropsWithoutRef<'main'> {}

export default function PageContent(props: IPageContent) {
  const { children, ...otherProps } = props;
  return <main {...otherProps}>{children}</main>;
}
