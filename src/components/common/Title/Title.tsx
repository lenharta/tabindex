import { type Factory, factory } from '@/components/factory';

type TitleFactory = Factory<{
  component: 'Title';
}>;

type TitleElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

const findComponent = (props: Record<TitleElement, boolean | undefined>): TitleElement => {
  const elements = Object.keys(props) as TitleElement[];
  return elements.find((v) => props[v] === true) as TitleElement;
};

export const Title = factory<TitleFactory>((props, ref) => {
  const { h1, h2, h3, h4, h5, h6, children, ...otherProps } = props;
  const Component = findComponent({ h1, h2, h3, h4, h5, h6 });
  return (
    <Component ref={ref} {...otherProps}>
      {children}
    </Component>
  );
});
