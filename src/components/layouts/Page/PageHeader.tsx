import { type Factory, factory } from '@/components/factory';

type PageHeaderFactory = Factory<{
  component: 'PageHeader';
}>;

export const PageHeader = factory<PageHeaderFactory>((props, ref) => {
  const { children, ...otherProps } = props;
  return (
    <header {...otherProps} className="PageHeader" ref={ref}>
      {children}
    </header>
  );
});

PageHeader.displayName = '@TBDX/Page.Header';
