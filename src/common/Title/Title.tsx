import { createFactory, createModifierClasses, mergeProps } from '@/utils';
import { type TFactoryTitle, UnstyledTitle } from '@/common/Title';

const defaultProps: Partial<TFactoryTitle['props']> = {
  as: 'h3',
  size: 'sm',
  align: 'start',
  fontStyle: 'normal',
  fontWeight: 'reg',
};

export const Title = createFactory<TFactoryTitle>((props, ref) => {
  const { as, size, align, fontStyle, fontWeight, className, children, ...otherProps } = props;

  const css = createModifierClasses({
    base: 'Title',
    modifiers: mergeProps(defaultProps, { size, align, fontStyle, fontWeight }),
    className,
  });

  return (
    <UnstyledTitle ref={ref} as={as} {...otherProps} className={css}>
      {children}
    </UnstyledTitle>
  );
});

Title.displayName = '@/common/Title';
