import { createFactory, createThemeClasses, mergeProps } from '@/utils';
import { type TFactoryBody, UnstyledBody } from '@/common/Body';

const defaultModifiers: Partial<TFactoryBody['props']> = {
  size: 'sm',
  align: 'start',
  fontStyle: 'normal',
  fontWeight: 'reg',
};

export const Body = createFactory<TFactoryBody>((props, ref) => {
  const { children, className, size, align, fontStyle, fontWeight, ...otherProps } = props;

  const modifiers = mergeProps(defaultModifiers, { size, align, fontStyle, fontWeight });

  const css = createThemeClasses({ base: 'Body', modifiers, className });

  return (
    <UnstyledBody ref={ref} {...otherProps} className={css}>
      {children}
    </UnstyledBody>
  );
});

Body.displayName = '@/common/Body';
