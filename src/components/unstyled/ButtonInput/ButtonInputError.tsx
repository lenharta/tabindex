import { type TextBaseProps, Text } from '@/components/unstyled';
import { type ButtonInputSharedProps } from './ButtonInput';

export interface ButtonInputErrorProps extends ButtonInputSharedProps, TextBaseProps {}

export const ButtonInputError = (props: ButtonInputErrorProps) => {
  const { id, text, ...otherProps } = props;
  return (
    <Text id={id} {...otherProps}>
      {text}
    </Text>
  );
};
