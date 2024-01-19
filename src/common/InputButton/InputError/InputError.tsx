import { Text } from '@/common/Unstyled';
import { createStaticFactory } from '@/core/factory';
import type { StaticFactory } from '@/core/factory';

export interface InputErrorProps {
  id?: string | undefined;
  text?: string | undefined;
}

export type InputErrorFactory = StaticFactory<{
  props: InputErrorProps;
  component: 'p';
}>;

export const InputError = createStaticFactory<InputErrorFactory>((props) => {
  const { children, text, ...otherProps } = props;
  if (!text || !children) return null;
  return <Text {...otherProps}>{children ?? text}</Text>;
});
