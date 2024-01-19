import { type TextBaseProps, Text } from '@/components/unstyled';
import { type ButtonInputSharedProps } from './ButtonInput';

export interface ButtonInputNoteProps extends ButtonInputSharedProps, TextBaseProps {}

export const ButtonInputNote = (props: ButtonInputNoteProps) => {
  const { id, text, ...otherProps } = props;
  return (
    <Text id={id} {...otherProps}>
      {text}
    </Text>
  );
};
