import clsx from 'clsx';
import { mergeProps } from '@/utils';
import { type TBDX } from '@/types';
import { type IconName, Icon } from '../Icon';
import { type CORE, createStaticFactory } from '@/components/factory';

interface ToolProps {
  icon?: IconName;
  size?: TBDX.Size;
  radius?: TBDX.Radius;
  readOnly?: boolean;
  label?: string;
}

export type ToolFactory = CORE.Factory<{
  ref: HTMLButtonElement;
  props: ToolProps;
  component: 'button';
}>;

const defaultProps: ToolProps = {
  size: 'sm',
};

export const Tool = createStaticFactory<ToolFactory>((props, ref) => {
  const {
    icon = 'dismiss_circle',
    label,
    className,
    component: Component = 'button',
    children,
    ...otherProps
  } = props;

  const { size, radius, ...additionalProps } = mergeProps({ props: otherProps, defaultProps });

  const clxss = clsx(
    'tbdx-tool',
    {
      [`tbdx-tool--size-${size}`]: size,
      [`tbdx-tool--radius-${radius}`]: radius,
    },
    className
  );

  return (
    <Component {...additionalProps} ref={ref} className={clxss}>
      <Icon name={icon} className="tbdx-tool-icon" />
    </Component>
  );
});
