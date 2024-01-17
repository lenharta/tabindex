import { mergeProps, createThemeClasses, createPolymorphicFactory } from '@/utils';
import { type IPropsButton, type TComponentButton } from './Button.types';
import { type PolymorphicFactory } from '@/utils';

const defaultModifiers: Partial<IPropsButton> = {
  size: 'sm',
  align: 'start',
  scheme: 'default',
};

type TButtonFactory = PolymorphicFactory<{
  component: TComponentButton;
  props: IPropsButton;
}>;

export const Button = createPolymorphicFactory<TButtonFactory>((props, ref) => {
  const {
    size,
    align,
    scheme,
    children,
    className,
    component: Component = 'button',
    ...otherProps
  } = props;

  const modifiers = mergeProps(defaultModifiers, { size, align, scheme });
  const css = createThemeClasses({ base: 'Button', modifiers, className });

  return (
    <Component ref={ref} {...otherProps} className={css}>
      {children}
    </Component>
  );
});

Button.displayName = '@/common/Button';
