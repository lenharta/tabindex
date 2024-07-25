import { Core } from '@/types';

type PageMainProps = Core.Props<'main'> & {};

function PageMain(props: PageMainProps) {
  const { children, ...otherProps } = props;
  return (
    <main className="tbx-page-main" id="main_content" {...otherProps}>
      {children}
    </main>
  );
}

PageMain.displayName = 'Components.Page.Main';
export { PageMain };
