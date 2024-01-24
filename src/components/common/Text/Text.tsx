import { type Factory, factory } from '@/components/factory';

type TextFactory = Factory<{
  component: 'Text';
}>;

export const Text = factory<TextFactory>((props, ref) => {
  const { component: Component = 'p', children } = props;
  return <Component ref={ref}>{children}</Component>;
});
