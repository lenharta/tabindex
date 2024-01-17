import { type PolymorphicFactory } from '@/utils';

export type TComponentTitle = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface IPropsBaseTitle {}

export type TFactoryTitle = PolymorphicFactory<{
  component: TComponentTitle;
  props: IPropsBaseTitle;
}>;
