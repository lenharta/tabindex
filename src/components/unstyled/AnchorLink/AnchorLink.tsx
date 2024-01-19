import { type Factory, createFactory } from '@/core/factory';

export interface AnchorLinkBaseProps {}

export type AnchorLinkFactory = Factory<{
  props: AnchorLinkBaseProps;
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

AnchorLink.displayName = '@tabindex/Unstyled/AnchorLink';
