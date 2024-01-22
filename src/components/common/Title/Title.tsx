import { createThemeClasses } from '@/utils';
import { type TBDXTitleThemeOptions } from '@/core/theme';
import { type PolymorphicFactory, createPolymorphicFactory } from '@/core/factory';

export interface TitleProps extends TBDXTitleThemeOptions {}

export type TitleFactory = PolymorphicFactory<{
  props: TitleProps;
  component: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  components: {};
}>;

export const Title = createPolymorphicFactory<TitleFactory>((props, ref) => {
  const {
    size,
    scheme,
    variant,
    className: defaultClassName,
    component: Component = 'h3',
    children,
    ...otherProps
  } = props;

  const className = createThemeClasses({
    base: 'Title',
    modifiers: { Component, size, scheme, variant },
    className: defaultClassName,
  });

  return (
    <Component {...otherProps} ref={ref} classNam={className}>
      {children}
    </Component>
  );
});
