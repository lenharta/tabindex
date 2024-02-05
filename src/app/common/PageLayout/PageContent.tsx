import { type CORE, createBasicFactory } from '@/components/factory';

export interface PageContentProps {}

export type PageContentFactory = CORE.Factory<{
  ref: HTMLDivElement;
  props: PageContentProps;
  component: 'div';
}>;

export const PageContent = createBasicFactory<PageContentFactory>((props) => {
  const { component: Component = 'div', children, ...otherProps } = props;
  return (
    <Component {...otherProps} className="tbdx-page-content">
      {children}
    </Component>
  );
});
