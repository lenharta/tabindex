import { type Factory, factory } from '@/components/factory';

type PageFooterFactory = Factory<{
  component: 'PageFooter';
}>;

export const PageFooter = factory<PageFooterFactory>((props, ref) => {
  const { children, ...otherProps } = props;
  return (
    <footer {...otherProps} className="PageFooter" ref={ref}>
      {children}
    </footer>
  );
});

PageFooter.displayName = '@TBDX/Page.Footer';
