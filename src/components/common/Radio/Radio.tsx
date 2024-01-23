import clsx from 'clsx';
import * as React from 'react';
import { InlineInput, InlineInputProps } from '../InlineInput';

export type RadioProps = InlineInputProps & {};

export type RadioIndicatorProps = {};

export const Radio = React.forwardRef<HTMLButtonElement, RadioProps>((props, ref) => {
  const {
    info,
    error,
    label,
    size = 'sm',
    scheme = 'default',
    alignment = 'start',
    ...otherProps
  } = props;
  const css = clsx('Radio');

  return (
    <InlineInput
      size={size}
      info={info}
      label={label}
      error={error}
      scheme={scheme}
      className={css}
      alignment={alignment}
      {...otherProps}
      ref={ref}
    ></InlineInput>
  );
});
