import { createFactory } from '@/core/factory';
import { type Factory } from '@/core/factory';

export interface CheckboxProps {
  value?: string | undefined;
  checked?: boolean | undefined;
  onChange?(value: string): void | undefined;
}

export type CheckboxFactory = Factory<{
  props: CheckboxProps;
  component: 'button';
  components: {};
}>;

export const Checkbox = createFactory((props, ref) => {
  return <button></button>;
});
