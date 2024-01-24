import { type Factory, factory } from '@/components/factory';

type SpanFactory = Factory<{
  component: 'Span';
}>;

export const Span = factory<SpanFactory>((props, ref) => {
  const { component: Component = 'span', children } = props;
  return <Component ref={ref}>{children}</Component>;
});
