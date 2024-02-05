import { type CORE, createBasicFactory } from '@/components/factory';

interface PageHeaderProps {}

type PageHeaderFactory = CORE.Factory<{
  ref: HTMLDivElement;
  props: PageHeaderProps;
  component: 'header';
}>;

export const PageHeader = createBasicFactory<PageHeaderFactory>((props) => {
  const { component: Component = 'div', children, ...otherProps } = props;
  return (
    <Component {...otherProps} className="tbdx-page-header">
      {children}
    </Component>
  );
});
