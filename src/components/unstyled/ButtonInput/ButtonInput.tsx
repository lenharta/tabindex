import { Button } from '@/components/unstyled';
import { type Factory, createFactory } from '@/core/factory';
import { type ButtonInputNoteProps, ButtonInputNote } from './ButtonInputNote';
import { type ButtonInputErrorProps, ButtonInputError } from './ButtonInputError';
import { type ButtonInputLabelProps, ButtonInputLabel } from './ButtonInputLabel';

export interface ButtonInputSharedProps {
  id?: string | undefined;
  text?: string | undefined;
}

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

ButtonInput.displayName = '@tabindex/Unstyled/ButtonInput';
ButtonInput.Label = ButtonInputLabel;
ButtonInput.Error = ButtonInputError;
ButtonInput.Note = ButtonInputNote;
