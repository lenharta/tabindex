import { type Factory, createStatic } from '@/components/factory';

export type PageHeroProps = {};

type PageHeroFactory = Factory.Config<{
  component: 'div';
  props: PageHeroProps;
}>;

export const PageHero = createStatic<PageHeroFactory>((props) => {
  const { children, ...otherProps } = props;
  return (
    <div {...otherProps} className="Page-hero">
      {children}
    </div>
  );
});

PageHero.displayName = '@TBDX/Page.Hero';
