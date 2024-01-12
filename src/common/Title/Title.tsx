import { createFactory, mergeProps, createThemeClasses } from '@/utils';
import { type TFactoryTitle, UnstyledTitle } from '@/common/Title';

const defaultModifiers: Partial<TFactoryTitle['props']> = {
  as: 'h3',
  size: 'sm',
  align: 'start',
  fontStyle: 'normal',
  fontWeight: 'reg',
};

export const Title = createFactory<TFactoryTitle>((props, ref) => {
  const { as, size, align, fontStyle, fontWeight, className, children, ...otherProps } = props;

  const modifiers = mergeProps(defaultModifiers, { as, size, align, fontStyle, fontWeight });
  const css = createThemeClasses({ base: 'Title', modifiers, className });

  return (
    <UnstyledTitle ref={ref} as={as} {...otherProps} className={css}>
      {children}
    </UnstyledTitle>
  );
});

Title.displayName = '@/common/Title';
