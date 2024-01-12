import * as React from 'react';
import { Factory } from '@/utils';

export type TContextPage = {
  /** Identifies the element */
  id?: string;
  /** Specifies the layout style of the element */
  variant?: 'default' | 'sandbox';
};

export type TPropsPage = React.HTMLAttributes<HTMLDivElement>;
export type TPropsPageHero = React.HTMLAttributes<HTMLDivElement>;
export type TPropsPageFooter = React.HTMLAttributes<HTMLDivElement>;
export type TPropsPageContent = React.HTMLAttributes<HTMLDivElement>;

export interface IPropsPage extends TPropsPage {
  /** Specifies the layout style of the element */
  variant?: 'default' | 'sandbox';
}

export interface IPropsPageHero extends Omit<TPropsPageHero, 'title'> {
  /** Specifies a `Title` headline */
  title?: React.ReactNode;
}

export interface IPropsPageFooter extends TPropsPageFooter {}

export interface IPropsPageContent extends TPropsPageContent {}

export type TFactoryPage = Factory<{
  ref: HTMLDivElement;
  props: IPropsPage;
  components: {
    Hero: React.FC<IPropsPageHero>;
    Footer: React.FC<IPropsPageFooter>;
    Content: React.FC<IPropsPageContent>;
  };
}>;

export type TFactoryPageHero = Factory<{
  ref: HTMLDivElement;
  props: IPropsPageHero;
}>;

export type TFactoryPageFooter = Factory<{
  ref: HTMLDivElement;
  props: IPropsPageFooter;
}>;

export type TFactoryPageContent = Factory<{
  ref: HTMLDivElement;
  props: IPropsPageContent;
}>;
