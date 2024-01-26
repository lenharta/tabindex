import { type Factory, createStatic } from '@/components/factory';

export type PageFooterProps = {};

type PageFooterFactory = Factory.Config<{
  component: 'footer';
  props: PageFooterProps;
}>;

export const PageFooter = createStatic<PageFooterFactory>((props) => {
  const { children, ...otherProps } = props;
  return (
    <footer {...otherProps} className="Page-footer">
      {children}
    </footer>
  );
});

PageFooter.displayName = '@TBDX/Page.Footer';
