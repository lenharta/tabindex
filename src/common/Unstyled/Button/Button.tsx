import { createPolymorphicFactory } from '@/utils';
import { type TFactoryButton } from './Button.types';

const defaultProps: Partial<TFactoryButton['props']> = {};

export const Button = createPolymorphicFactory<TFactoryButton>((props, ref) => {
  const {
    loading,
    disabled,
    readonly,
    children,
    leftContent,
    rightContent,
    excludeTabOrder,
    component: Component = 'button',
    ...otherProps
  } = props;

  const dataProps = {
    'data-loading': loading,
    'data-disabled': disabled,
    'data-readonly': readonly,
  };

  return (
    <Component ref={ref} {...defaultProps} {...dataProps} {...otherProps}>
      {leftContent && <div>{leftContent}</div>}
      {children}
      {rightContent && <div>{rightContent}</div>}
    </Component>
  );
});
