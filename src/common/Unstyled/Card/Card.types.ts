import { type PolymorphicFactory } from '@/utils';

export type TComponentCard = 'div' | 'article' | 'section' | 'button' | 'a';

export interface IPropsBaseCard {}

export type TFactoryCard = PolymorphicFactory<{
  component: TComponentCard;
  props: IPropsBaseCard;
}>;
