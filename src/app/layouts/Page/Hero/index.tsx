import type { TComponentPageHero } from '../types';
import { Title } from '@/common/Title';

export const PageHero: TComponentPageHero = (props) => {
  const { children, ...otherProps } = props;
  return (
    <header {...otherProps} className="Page-hero">
      {props.title && <Title as="h1">{props.title}</Title>}
      {children ?? null}
    </header>
  );
};
