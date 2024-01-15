import { createFactory } from '@/utils';
import { type TFactoryPageFooter } from '../Page.types';

export const PageFooter = createFactory<TFactoryPageFooter>((props, ref) => {
  const { children, ...otherProps } = props;
  return (
    <footer ref={ref} {...otherProps} className="Page-Footer">
      {children}
    </footer>
  );
});

PageFooter.displayName = '@tabindex/Page.Footer';
