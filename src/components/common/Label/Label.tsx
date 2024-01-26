import { Factory, createPolymorphic } from '@/components/factory';
import clsx from 'clsx';

export type LabelProps = {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  scheme?: 'primary' | 'secondary' | 'action';
  justify?: 'start' | 'center' | 'end';
  alignment?: 'start' | 'center' | 'end';
  className?: string;
  children?: React.ReactNode;
};

export type LabelFactory = Factory.Config<{
  component: 'label';
  props: LabelProps;
}>;

export const Label = createPolymorphic<LabelFactory>((props, ref) => {
  const {
    size,
    scheme,
    justify,
    alignment,
    className: defaultClassName,
    component: Component = 'label',
    children,
    ...otherProps
  } = props;

  const className = clsx(
    'Label',
    {
      [`Label--${size}`]: size !== undefined,
      [`Label--${scheme}`]: scheme !== undefined,
      [`Label--${justify}`]: justify !== undefined,
      [`Label--${alignment}`]: alignment !== undefined,
    },
    defaultClassName
  );

  return (
    <Component {...otherProps} className={className} ref={ref}>
      {children}
    </Component>
  );
});
