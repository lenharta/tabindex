import type { Factory } from '@/core/factory';
import { createFactory } from '@/core/factory';

export interface AnchorLinkProps {}

export type AnchorLinkFactory = Factory<{
  props: AnchorLinkProps;
  component: 'a';
  components: {};
}>;

export const AnchorLink = createFactory<AnchorLinkFactory>((props, ref) => {
  const { children, ...otherProps } = props;
  return (
    <a {...otherProps} ref={ref}>
      {children}
    </a>
  );
});
