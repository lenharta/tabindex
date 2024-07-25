import { Core } from '@/types';

type TextProps = Core.Props<'p'> & {
  span?: boolean | undefined;
};

function Text(props: TextProps) {
  const { span, children, className, ...otherProps } = props;

  let Component: React.ElementType = 'p';
  if (span) Component = 'span';

  return (
    <Component className="tbx-text" {...otherProps}>
      {children}
    </Component>
  );
}

Text.displayName = 'Common.Text';
export { Text };
