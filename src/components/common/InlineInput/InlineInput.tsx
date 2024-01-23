import clsx from 'clsx';
import React from 'react';

export type InlineInputProps = React.ComponentPropsWithoutRef<'button'> & {
  info?: string;
  label?: string;
  error?: string;
  elevated?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  alignment?: 'start' | 'center' | 'end';
  scheme?: 'default' | 'secondary' | 'action';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
};

export type InlineInputInfoProps = React.ComponentPropsWithoutRef<'p'> & {
  info?: string;
};

export type InlineInputErrorProps = React.ComponentPropsWithoutRef<'p'> & {
  error?: string;
};

export type InlineInputLabelProps = React.ComponentPropsWithoutRef<'label'> & {
  label?: string;
};

export const InlineInputInfo = (props: InlineInputInfoProps) => {
  const { info, ...otherProps } = props;
  return <p {...otherProps}>{info}</p>;
};

export const InlineInputError = (props: InlineInputErrorProps) => {
  const { error, ...otherProps } = props;
  return <p {...otherProps}>{error}</p>;
};

export const InlineInputLabel = (props: InlineInputLabelProps) => {
  const { label, ...otherProps } = props;
  return <label {...otherProps}>{label}</label>;
};

export const InlineInput = React.forwardRef<HTMLButtonElement, InlineInputProps>((props, ref) => {
  const {
    info,
    label,
    error,
    disabled,
    readonly,
    children,
    className,
    elevated,
    scheme = 'default',
    size = 'small',
    ...otherProps
  } = props;

  const css = clsx(
    'InlineInput',
    {
      [`InlineInput--${size}`]: size,
      [`InlineInput--${scheme}`]: scheme,
      [`InlineInput--${elevated}`]: elevated,
    },
    className
  );

  const dataProps = {
    'data-disabled': disabled,
    'data-readonly': readonly,
  };

  const ariaProps = {
    'aria-label': label,
    'aria-disabled': disabled,
    'aria-readonly': readonly,
  };

  return (
    <button {...otherProps} {...ariaProps} {...dataProps} ref={ref} className={css}>
      {children}
      <div>
        {label && <InlineInputLabel label={label} />}
        {error && <InlineInputError error={error} />}
        {info && <InlineInputInfo info={info} />}
      </div>
    </button>
  );
});
