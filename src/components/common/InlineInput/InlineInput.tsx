import { CORE, createPolymorphicFactory } from '@/components/factory';
import * as React from 'react';

export interface InlineInputProps {
  disabled?: boolean;
  readOnly?: boolean;
  error?: string;
  label?: string;
  text?: string;
}

export type InlineInputFactory = CORE.Factory<{
  ref: HTMLButtonElement;
  props: InlineInputProps;
  component: 'button';
}>;

export const InlineInput = createPolymorphicFactory<InlineInputFactory>((props, ref) => {
  const { id, text, label, error, className, children, disabled, readOnly, ...otherProps } = props;

  const uid = React.useId();
  const rootId = id ? `input${uid}${id}` : `input${uid}`;

  const labelProps = {
    id: `${rootId}label`,
    className: `${className}--label`,
    children: label,
    htmlFor: rootId,
  };

  const errorProps = {
    id: `${rootId}error`,
    className: `${className}--error`,
    children: error,
  };

  const textProps = {
    id: `${rootId}text`,
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
      disabled={disabled}
      className={className}
      aria-disabled={disabled}
      aria-readonly={readOnly}
      data-readonly={readOnly}
      data-disabled={disabled}
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
