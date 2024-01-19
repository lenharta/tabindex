import { Button } from '@/common/Unstyled';
import type { Factory } from '@/core/factory';
import { createFactory } from '@/core/factory';

export interface ButtonInputTextProps {
  id?: string | undefined;
  text?: string | undefined;
}

export interface ButtonInputNoteProps extends ButtonInputTextProps {}

export interface ButtonInputErrorProps extends ButtonInputTextProps {}

export interface ButtonInputLabelProps extends ButtonInputTextProps {
  htmlFor?: string | undefined;
  position?: 'left' | 'right';
}

export const ButtonInputNote = (props: ButtonInputNoteProps) => {
  const { id, text } = props;
  return <div id={id}>{text}</div>;
};

export const ButtonInputError = (props: ButtonInputErrorProps) => {
  const { id, text } = props;
  return <div id={id}>{text}</div>;
};

export const ButtonInputLabel = (props: ButtonInputLabelProps) => {
  const { id, text, htmlFor } = props;
  return (
    <label id={id} htmlFor={htmlFor}>
      {text}
    </label>
  );
};

export interface ButtonInputProps {
  loading?: boolean | undefined;
  disabled?: boolean | undefined;
  readonly?: boolean | undefined;
  noteProps?: ButtonInputNoteProps;
  errorProps?: ButtonInputErrorProps;
  labelProps?: ButtonInputLabelProps;
}

export type ButtonInputFactory = Factory<{
  props: ButtonInputProps;
  component: 'button';
  components: {
    Note: typeof ButtonInputNote;
    Error: typeof ButtonInputError;
    Label: typeof ButtonInputLabel;
  };
}>;

export const ButtonInput = createFactory<ButtonInputFactory>((props, ref) => {
  const {
    loading,
    disabled,
    readonly,
    noteProps,
    labelProps,
    errorProps,
    children,
    ...otherProps
  } = props;

  return (
    <Button ref={ref} loading={loading} disabled={disabled} readonly={readonly} {...otherProps}>
      {children}
      <div>
        <ButtonInput.Label {...labelProps} />
        <ButtonInput.Note {...noteProps} />
        <ButtonInput.Error {...errorProps} />
      </div>
    </Button>
  );
});

ButtonInput.displayName = '@tabindex/ButtonInput';
ButtonInput.Label = ButtonInputLabel;
ButtonInput.Error = ButtonInputError;
ButtonInput.Note = ButtonInputNote;
