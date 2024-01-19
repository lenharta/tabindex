import { Button } from '@/components/unstyled';
import { createFactory, type Factory } from '@/core/factory';
import { ButtonInputNote, type ButtonInputNoteProps } from './ButtonInputNote';
import { ButtonInputError, type ButtonInputErrorProps } from './ButtonInputError';
import { ButtonInputLabel, type ButtonInputLabelProps } from './ButtonInputLabel';

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
