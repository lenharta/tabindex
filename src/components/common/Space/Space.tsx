import clsx from 'clsx';
import { type TBDX } from '@/types';
import { type CORE, createBasicFactory } from '@/components/factory';

export interface SpaceProps {
  size?: TBDX.Size;
}

export type SpaceFactory = CORE.Factory<{
  ref: HTMLDivElement;
  props: SpaceProps;
  component: 'div';
}>;

export const Space = createBasicFactory<SpaceFactory>((props) => {
  const { component: Component = 'div', size, className, children, ...otherProps } = props;
  const clxss = clsx(`tbdx-space tbdx-space--size-${size}`, className);
  return (
    <Component {...otherProps} className={clxss}>
      {children}
    </Component>
  );
});
