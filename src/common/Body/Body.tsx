import { createFactory, createModifierClasses } from '@/utils';
import { type TFactoryBody, UnstyledBody } from '@/common/Body';

export const Body = createFactory<TFactoryBody>((props, ref) => {
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
