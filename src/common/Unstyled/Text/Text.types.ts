import { type PolymorphicFactory } from '@/utils';

export type TComponentText = 'p' | 'span';

export interface IPropsBaseText {
  span?: boolean;
}

export type TFactoryText = PolymorphicFactory<{
  component: TComponentText;
  props: IPropsBaseText;
}>;
