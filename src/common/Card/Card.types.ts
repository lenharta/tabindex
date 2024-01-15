import * as React from 'react';
import { type PolymorphicFactory } from '@/utils';

export type TPropsCard = React.HTMLAttributes<HTMLDivElement>;

export interface IPropsCard extends TPropsCard {
  headline?: string;
}

export type TPropsPolymorphicCard = IPropsCard & { component: any; renderRoot: any };

export type TFactoryPolymorphicCard = PolymorphicFactory<{
  component: any;
  props: IPropsCard;
}>;
