import { type Factory, factory } from '@/components/factory';

type PageHeroFactory = Factory<{
  component: 'PageHero';
}>;

export const PageHero = factory<PageHeroFactory>((props, ref) => {
  const { children, headline, ...otherProps } = props;
  return (
    <div {...otherProps} className="PageHero" ref={ref}>
      {headline && <h1>{headline}</h1>}
      {children}
    </div>
  );
});

PageHero.displayName = '@TBDX/Page.Hero';
