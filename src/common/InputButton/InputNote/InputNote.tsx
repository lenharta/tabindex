import { Text } from '@/common/Unstyled';
import { createStaticFactory } from '@/core/factory';
import type { StaticFactory } from '@/core/factory';

export interface InputNoteProps {
  id?: string | undefined;
  text?: string | undefined;
}

export type InputNoteFactory = StaticFactory<{
  props: InputNoteProps;
  component: 'p';
}>;

export const InputNote = createStaticFactory<InputNoteFactory>((props) => {
  const { children, text, ...otherProps } = props;
  if (!text || !children) return null;
  return <Text {...otherProps}>{children ?? text}</Text>;
});
