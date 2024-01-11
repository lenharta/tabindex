import { factory } from '@/utils/create-factory';
import { createModifierClasses } from '@/utils/create-modifier-classes';
import { type TFactoryTitle } from '@/common/Title';
import { UnstyledTitle } from '@/common/Title/Unstyled';

export const Title = factory<TFactoryTitle>((props, ref) => {
  const {
    as = 'h3',
    size = 'sm',
    align = 'start',
    fontStyle = 'normal',
    fontWeight = 'reg',
    className,
    children,
    ...otherProps
  } = props;

  const css = createModifierClasses({
    base: 'Title',
    modifiers: { size, align, fontStyle, fontWeight },
    className,
  });

  return (
    <UnstyledTitle ref={ref} as={as} {...otherProps} className={css}>
      {children}
    </UnstyledTitle>
  );
});
