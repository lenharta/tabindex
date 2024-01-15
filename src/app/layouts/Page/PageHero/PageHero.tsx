import { Title } from '@/common/Title';
import { createFactory } from '@/utils';
import { type TFactoryPageHero } from '../Page.types';

export const PageHero = createFactory<TFactoryPageHero>((props, ref) => {
  const { children, title, ...otherProps } = props;
  return (
    <div ref={ref} {...otherProps} className="Page-Hero">
      {title && (
        <Title as="h1" className="Page-Title">
          {title}
        </Title>
      )}
      {children}
    </div>
  );
});

PageHero.displayName = '@tabindex/Page.Hero';
