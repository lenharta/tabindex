import clsx from 'clsx';
import * as React from 'react';
import { InlineInput, InlineInputProps } from '../InlineInput';

export type ToggleProps = InlineInputProps & {
  checked?: boolean | undefined;
  onChange?(checked?: boolean): void | undefined;
};

const ToggleThumb = () => {
  return <div className="Thumb" />;
};

const ToggleTrack = ({ children }: { children: React.ReactNode }) => {
  return <div className="Track">{children}</div>;
};

export const Toggle = React.forwardRef<HTMLButtonElement, ToggleProps>((props, ref) => {
  const {
    info,
    error,
    label,
    size = 'sm',
    scheme = 'default',
    alignment = 'start',
    ...otherProp
  } = props;

  const css = clsx('Toggle');

  return (
    <InlineInput
      size={size}
      info={info}
      label={label}
      error={error}
      scheme={scheme}
      className={css}
      alignment={alignment}
      {...otherProp}
      ref={ref}
    >
      <ToggleTrack>
        <ToggleThumb />
      </ToggleTrack>
    </InlineInput>
  );
});
