import type { TComponentPageContent } from '../types';

export const PageContent: TComponentPageContent = (props) => {
  const { children, ...otherProps } = props;
  return (
    <main {...otherProps} className="Page-content" id="mainContent">
      {children ?? null}
    </main>
  );
};
