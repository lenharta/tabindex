import { Title } from '@/common/Unstyled';
import * as React from 'react';

export interface IPageHero extends React.ComponentPropsWithoutRef<'div'> {
  headline?: string;
}

export default function PageHero(props: IPageHero) {
  const { children, headline, ...otherProps } = props;
  return (
    <div {...otherProps}>
      {headline && <Title>{headline}</Title>}
      {children}
    </div>
  );
}
