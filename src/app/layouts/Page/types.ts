import type { HTMLAttributes } from 'react';

/** Defines properties of the page component */
export interface IPropsPage extends HTMLAttributes<HTMLDivElement> {}

/** Defines properties of the page hero wrapper sub-component */
export interface IPropsPageHero extends HTMLAttributes<HTMLDivElement> {
  /** Specifies a title for the page */
  title?: string | undefined;
}

/** Defines properties of the page content wrapper sub-component */
export interface IPropsPageContent extends HTMLAttributes<HTMLDivElement> {}

/** Defines the page wrapper component */
export type TComponentPage = (props: IPropsPage) => JSX.Element;

/** Defines the page hero wrapper sub-component */
export type TComponentPageHero = (props: IPropsPageHero) => JSX.Element;

/** Defines the page content wrapper sub-component */
export type TComponentPageContent = (props: IPropsPageContent) => JSX.Element;

/** Defines the page sub-components */
export type TSubComponentsPage = {
  /** Defines the page hero wrapper sub-component */
  Hero: TComponentPageHero;

  /** Defines the page content wrapper sub-component */
  Content: TComponentPageContent;
};
