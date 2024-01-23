import * as React from 'react';

export interface IPageHero extends React.ComponentPropsWithoutRef<'div'> {
  headline?: string;
}

export default function PageHero(props: IPageHero) {
  const { children, headline, ...otherProps } = props;
  return (
    <div {...otherProps}>
      {headline && <h1>{headline}</h1>}
      {children}
    </div>
  );
}
