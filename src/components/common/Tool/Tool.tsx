import clsx from 'clsx';
import { mergeProps } from '@/utils';
import { type TBDX } from '@/types';
import { type IconName, Icon } from '../Icon';
import { type CORE, createStaticFactory } from '@/components/factory';
import { useToolGroupCTX } from './ToolGroup';

interface ToolProps {
  icon?: IconName;
  size?: TBDX.Size;
  radius?: TBDX.Radius;
  accent?: TBDX.Color;
  surface?: TBDX.Surface;
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
  surface: 1,
};

export const Tool = createStaticFactory<ToolFactory>((props, ref) => {
  const {
    icon,
    label,
    className,
    component: Component = 'button',
    children,
    ...otherProps
  } = props;

  const context = useToolGroupCTX();

  const { accent, size, radius, surface, ...additionalProps } = mergeProps({
    props: otherProps,
    context,
    defaultProps,
  });

  const clxss = clsx(
    'tbdx-tool',
    {
      [`tbdx-tool--size-${size}`]: size,
      [`tbdx-tool--accent-${accent}`]: accent,
      [`tbdx-tool--radius-${radius}`]: radius,
      [`tbdx-surface--${surface}-interactive`]: surface,
    },
    className
  );

  return (
    <Component {...additionalProps} ref={ref} className={clxss}>
      <Icon name={icon} className="tbdx-tool-icon" />
    </Component>
  );
});
