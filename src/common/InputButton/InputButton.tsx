import { createFactory, type Factory } from '@/core/factory';
import { InputNote, type InputNoteProps } from './InputNote';
import { InputError, type InputErrorProps } from './InputError';
import { InputLabel, type InputLabelProps } from './InputLabel';

// export type CheckboxSize = Extract<TBDXSize, 'small' | 'medium' | 'large'>;

export interface InputButtonProps {
  // size?: CheckboxSize | (string & {}) | undefined;
  error?: InputErrorProps;
  label?: InputLabelProps;
  note?: InputNoteProps;
}

export type InputButtonFactory = Factory<{
  props: InputButtonProps;
  component: 'button';
  components: {
    Note: typeof InputNote;
    Error: typeof InputError;
    Label: typeof InputLabel;
  };
}>;

export const InputButton = createFactory<InputButtonFactory>((props, ref) => {
  const { children, error, label, note, ...otherProps } = props;
  return (
    <button className="InputButton" {...otherProps} ref={ref}>
      {children}
      <div>
        <InputButton.Label {...label} className="InputButton-Label" />
        <InputButton.Error {...error} className="InputButton-Error" />
        <InputButton.Note {...note} className="InputButton-Note" />
      </div>
    </button>
  );
});

InputButton.Note = InputNote;
InputButton.Error = InputError;
InputButton.Label = InputLabel;

InputButton.displayName = '@tabindex/InputButton';
