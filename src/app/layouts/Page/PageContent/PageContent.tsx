import { createFactory } from '@/utils';
import { type TFactoryPageContent } from '../Page.types';

export const PageContent = createFactory<TFactoryPageContent>((props, ref) => {
  const { children, ...otherProps } = props;
  return (
    <main ref={ref} {...otherProps} className="Page-Content">
      {children}
    </main>
  );
});

PageContent.displayName = '@tabindex/Page.Content';
