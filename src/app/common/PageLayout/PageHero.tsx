import { Title } from '@/components/common';
import { type CORE, createBasicFactory } from '@/components/factory';

interface PageHeroProps {
  title?: string;
}

type PageHeroFactory = CORE.Factory<{
  ref: HTMLDivElement;
  props: PageHeroProps;
  component: 'div';
}>;

export const PageHero = createBasicFactory<PageHeroFactory>((props) => {
  const { component: Component = 'div', title, children, ...otherProps } = props;
  return (
    <Component {...otherProps} className="tbdx-page-hero">
      <Title className="tbdx-page-title" component="h1">
        {title}
      </Title>
      {children}
    </Component>
  );
});
