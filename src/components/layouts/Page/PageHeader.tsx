import { type Factory, createStatic } from '@/components/factory';

export type PageHeaderProps = {};

type PageHeaderFactory = Factory.Config<{
  component: 'header';
  props: PageHeaderProps;
}>;

export const PageHeader = createStatic<PageHeaderFactory>((props) => {
  const { children, ...otherProps } = props;
  return (
    <header {...otherProps} className="Page-header">
      {children}
    </header>
  );
});

PageHeader.displayName = '@TBDX/Page.Header';
