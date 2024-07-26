import clsx from 'clsx';
import { Core } from '@/types';

type TitleProps = Core.Props<'h2'> & {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: Core.Size | undefined;
};

function Title(props: TitleProps) {
  const { as: Component = 'h2', size = 'sm', className, children, ...otherProps } = props;
  return (
    <Component className={clsx('tbx-title', `tbx-title--${size}`, className)} {...otherProps}>
      {children}
    </Component>
  );
}

Title.displayName = 'Common.Title';
export { Title };
