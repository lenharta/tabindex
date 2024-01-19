import { type ButtonInputSharedProps } from './ButtonInput';
import { Text, type TextProps } from '@/components/unstyled';

export interface ButtonInputErrorProps extends ButtonInputSharedProps, TextProps {}

export const ButtonInputError = (props: ButtonInputErrorProps) => {
  const { id, text, ...otherProps } = props;
  return (
    <Text id={id} {...otherProps}>
      {text}
    </Text>
  );
};
