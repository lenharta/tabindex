import clsx from 'clsx';
import { TBDX } from '@/types';

const defaultProps: TBDX.TextProps = {
  fe: 'med',
  ff: 'plex',
  fw: 'reg',
  fz: 'sm',
};

function cx<T extends Record<string, any>>(props: T) {}

function Text(props: TBDX.TextProps) {
  const { as: Component = 'p', fe, ff, fw, fz, children, className, ...otherProps } = props;

  return (
    <Component className={clsx('tbdx-text', `tbdx-text--fz-${fz}`, className)} {...otherProps}>
      {children}
    </Component>
  );
}

Text.displayName = 'Common.Text';
export { Text };
