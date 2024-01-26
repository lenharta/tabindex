import { type Factory, factory } from '@/components/factory';

type PageHeroProps = {
  headline?: string;
};

type PageHeroFactory = Factory<{
  props: PageHeroProps;
  component: 'div';
}>;

export const PageHero = factory<PageHeroFactory>((props, ref) => {
  const { component: Component = 'div', children, headline, ...otherProps } = props;
  return (
    <Component {...otherProps} className="PageHero" ref={ref}>
      {headline && <h1>{headline}</h1>}
      {children}
    </Component>
  );
});

PageHero.displayName = '@TBDX/Page.Hero';
