import { type ButtonInputSharedProps } from './ButtonInput';
import { Text, type TextProps } from '@/components/unstyled';

export interface ButtonInputNoteProps extends ButtonInputSharedProps, TextProps {}

export const ButtonInputNote = (props: ButtonInputNoteProps) => {
  const { id, text, ...otherProps } = props;
  return (
    <Text id={id} {...otherProps}>
      {text}
    </Text>
  );
};
