import * as React from 'react';

type InlineInputOverrides = 'disabled' | 'readOnly';
type InlineInputBaseProps = Omit<JSX.IntrinsicElements['button'], InlineInputOverrides>;

export type InlineInputProps = InlineInputBaseProps & {
  isDisabled?: boolean;
  isReadOnly?: boolean;
  error?: string;
  label?: string;
  text?: string;
};

export const InlineInput = React.forwardRef<HTMLButtonElement, InlineInputProps>((props, ref) => {
  const { id, text, label, error, className, children, isDisabled, isReadOnly, ...otherProps } =
    props;

  const uid = React.useId();
  const rootId = `input:${uid}:${id}`;

  const labelProps = {
    id: `${rootId}:label`,
    className: `${className}--label`,
    children: label,
    htmlFor: rootId,
  };

  const errorProps = {
    id: `${rootId}:error`,
    className: `${className}--error`,
    children: error,
  };

  const textProps = {
    id: `${rootId}:text`,
    className: `${className}--text`,
    children: text,
  };

  return (
    <button
      {...otherProps}
      ref={ref}
      id={rootId}
      type="button"
      role="checkbox"
      className={className}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      aria-readonly={isReadOnly}
      data-readonly={isReadOnly}
      data-disabled={isDisabled}
    >
      {children}
      <div>
        {label && <label {...labelProps} />}
        {error && <p {...errorProps} />}
        {text && <p {...textProps} />}
      </div>
    </button>
  );
});
