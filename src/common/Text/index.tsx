import clsx from 'clsx';
import { Core } from '@/types';

type TextProps = Core.Props<'p'> & {
  as?: 'p' | 'span';
  size?: Core.Size | undefined;
};

function Text(props: TextProps) {
  const { as: Component = 'p', size = 'sm', children, className, ...otherProps } = props;

  return (
    <Component className={clsx('tbx-text', `tbx-text--${size}`, className)} {...otherProps}>
      {children}
    </Component>
  );
}

Text.displayName = 'Common.Text';
export { Text };
