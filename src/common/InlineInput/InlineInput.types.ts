import { type Factory } from '@/utils';
import { type TAlignment, type TSize } from '@/core/types';
import { InlineInputLabel, InlineInputNote } from './InlineInput';

export interface IPropsInlineInput {
  label?: string;
  text?: string;
  size?: TSize;
  align?: TAlignment;
  scheme?: 'default' | 'secondary';
  required?: boolean;
}

export type TFactoryInlineInput = Factory<{
  props: IPropsInlineInput;
  component: 'button';
  components: {
    Note: typeof InlineInputNote;
    Label: typeof InlineInputLabel;
  };
}>;
