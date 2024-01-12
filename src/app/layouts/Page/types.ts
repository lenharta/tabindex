import * as React from 'react';
import { Factory } from '@/utils';

export type TPropsPage = React.HTMLAttributes<HTMLDivElement>;

export type TFactoryPage = Factory<{
  ref: HTMLDivElement;
  props: TPropsPage;
  components: {
    Hero: React.FC<TPropsPage & { title?: React.ReactNode }>;
    Content: React.FC<TPropsPage>;
  };
}>;
