import { Title } from '@/components/common';
import { type Factory, createStatic } from '@/components/factory';

export type PageHeroProps = {
  headline?: string;
};

type PageHeroFactory = Factory.Config<{
  component: 'div';
  props: PageHeroProps;
}>;

export const PageHero = createStatic<PageHeroFactory>((props) => {
  const { children, headline, ...otherProps } = props;
  return (
    <div {...otherProps} className="Page-hero">
      {headline && (
        <Title h1 className="Page-hero-title">
          {headline}
        </Title>
      )}
      {children}
    </div>
  );
});

PageHero.displayName = '@TBDX/Page.Hero';
