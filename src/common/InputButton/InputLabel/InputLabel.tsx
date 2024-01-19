import { Label } from '@/common/Unstyled';
import { createStaticFactory } from '@/core/factory';
import type { StaticFactory } from '@/core/factory';

export interface InputLabelProps {
  id?: string | undefined;
  text?: string | undefined;
  htmlFor?: string | undefined;
  position?: 'left' | 'right';
}

export type InputLabelFactory = StaticFactory<{
  props: InputLabelProps;
  component: 'label';
}>;

export const InputLabel = createStaticFactory<InputLabelFactory>((props) => {
  const { children, text, position, ...otherProps } = props;
  if (!text || !children) return null;
  return (
    <Label {...otherProps} data-position={position}>
      {text}
    </Label>
  );
});
