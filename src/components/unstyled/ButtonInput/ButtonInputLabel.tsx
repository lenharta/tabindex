import { type LabelBaseProps, Label } from '@/components/unstyled';
import { type ButtonInputSharedProps } from './ButtonInput';

export interface ButtonInputLabelProps extends ButtonInputSharedProps, LabelBaseProps {}

export const ButtonInputLabel = (props: ButtonInputLabelProps) => {
  const { id, text, htmlFor } = props;
  return (
    <Label id={id} htmlFor={htmlFor}>
      {text}
    </Label>
  );
};
