export type PageContentProps = {
  children?: React.ReactNode;
};

export const PageContent = (props: PageContentProps) => {
  const { children } = props;
  return (
    <div className="PageContent" id="main_content">
      {children}
    </div>
  );
};
