const ControlWrapper = (props: { children: React.ReactNode }) => {
  return <div className="tbdx-sandbox-control-wrapper">{props.children}</div>;
};

export const ControlTextbox: typeof Sandbox.ControlTextbox = (props) => {
  const { id, label, type = 'text', ...inputProps } = props;

  return (
    <ControlWrapper>
      {label && (
        <label className="tbdx-sandbox-control-textbox-label" htmlFor={id} children={label} />
      )}
      <input {...inputProps} className="tbdx-sandbox-control-textbox-input" type={type} />
    </ControlWrapper>
  );
};

export const Toggle: typeof Sandbox.ControlToggle = (props) => {
  const {
    id,
    type = 'button',
    value,
    onLabel,
    offLabel,
    disabled,
    readonly,
    ...buttonProps
  } = props;

  const label = value ? onLabel : offLabel;

  return (
    <ControlWrapper>
      <button
        {...buttonProps}
        className="tbdx-toggle-button"
        data-disabled={disabled}
        data-readonly={readonly}
        aria-disabled={disabled}
        aria-readonly={readonly}
        aria-label={label}
        value={value}
        type={type}
        id={id}
      >
        <div className="tbdx-toggle-track">
          <span
            data-position={value ? 'left' : 'right'}
            className="tbdx-toggle=label"
            children={label}
          />
          <div data-position={value ? 'right' : 'left'} className="tbdx-toggle-thumb" />
        </div>
      </button>
    </ControlWrapper>
  );
};

export const ControlSelect: typeof Sandbox.ControlSelect = (props) => {
  const { id, options, disabled, readonly, name, ...selectProps } = props;

  const css = {
    input: '',
    option: 'tbdx-sandbox-control-select-option',
  };

  return (
    <ControlWrapper>
      <select
        id={id}
        name={name}
        aria-label={name}
        aria-readonly={readonly}
        aria-disabled={disabled}
        data-readonly={readonly}
        data-disabled={disabled}
        className="tbdx-sandbox-control-select-input"
        {...selectProps}
      >
        {options?.map((option) => (
          <option
            {...option}
            children={option.label}
            aria-label={option.label}
            aria-readonly={option.readonly || readonly}
            aria-disabled={option.disabled || disabled}
            data-disabled={option.disabled || disabled}
            data-readonly={option.readonly || readonly}
            className="tbdx-sandbox-control-select-option"
          />
        ))}
      </select>
    </ControlWrapper>
  );
};

export const SandboxControls = () => {
  return (
    <div className="tbdx-sandbox-controls">
      <span>Sandbox Controls</span>
      <ControlSelect />
      <Toggle />
      <ControlTextbox />
    </div>
  );
};
