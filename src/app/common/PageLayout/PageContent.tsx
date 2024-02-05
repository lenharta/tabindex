import * as React from 'react';

type PageContentProps = {
  children?: React.ReactNode;
};

export const PageContent = (props: PageContentProps) => {
  const { children } = props;
  const contentId = 'main_content';
  const className = 'tbdx-page-content';
  return (
    <div className={className} id={contentId}>
      {children}
    </div>
  );
};
