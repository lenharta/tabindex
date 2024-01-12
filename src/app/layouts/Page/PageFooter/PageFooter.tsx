import { type TFactoryPageFooter } from '@/app/layouts/Page';
import { createFactory } from '@/utils';

export const PageFooter = createFactory<TFactoryPageFooter>((props, ref) => {
  const { children, ...otherProps } = props;
  return (
    <footer ref={ref} {...otherProps} className="Page-Footer">
      {children}
    </footer>
  );
});

PageFooter.displayName = '@tabindex/Page.Footer';
