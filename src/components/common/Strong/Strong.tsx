import { type Factory, factory } from '@/components/factory';

type StrongFactory = Factory<{
  component: 'Strong';
}>;

export const Strong = factory<StrongFactory>((props, ref) => {
  const { component: Component = 'strong', children } = props;
  return <Component ref={ref}>{children}</Component>;
});
