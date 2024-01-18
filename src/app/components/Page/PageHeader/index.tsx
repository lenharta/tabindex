import * as React from 'react';

export interface IPageHeader extends React.ComponentPropsWithoutRef<'header'> {}

export default function PageHeader(props: IPageHeader) {
  const { ...otherProps } = props;
  return (
    <header {...otherProps}>
      <span>Tabindex</span>
    </header>
  );
}
