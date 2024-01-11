import { factory } from '@/utils/create-factory';
import { createModifierClasses } from '@/utils/create-modifier-classes';
import { type TFactoryBody } from '@/common/Body';
import { UnstyledBody } from '@/common/Body/Unstyled';

export const Body = factory<TFactoryBody>((props, ref) => {
  const {
    children,
    className,
    fontWeight = 'reg',
    fontStyle = 'normal',
    align = 'start',
    size = 'sm',
    ...otherProps
  } = props;

  const css = createModifierClasses({
    base: 'Body',
    modifiers: { size, align, fontStyle, fontWeight },
    className,
  });

  return (
    <UnstyledBody ref={ref} {...otherProps} className={css}>
      {children}
    </UnstyledBody>
  );
});

Body.displayName = '@/common/Body';
