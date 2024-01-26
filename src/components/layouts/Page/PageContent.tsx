import { Factory, createStatic } from '@/components/factory';

type PageContentProps = {};

type PageContentFactory = Factory.Config<{
  props: PageContentProps;
  component: 'main';
}>;

export const PageContent = createStatic<PageContentFactory>((props) => {
  const { children, ...otherProps } = props;
  return (
    <main {...otherProps} className="PageContent" id="main_content">
      {children}
    </main>
  );
});

PageContent.displayName = '@TBDX/Page.Content';
