declare namespace Sandbox {
  export type ControlType = 'toggle' | 'select' | 'text';
  export type ControlValueToggle = boolean | 'true' | 'false';
  export type ControlValueSelect<T> = Record<string, T>;
  export type ControlValueText<T> = T | string | undefined;
  export type ControlValue<T> = ControlValueToggle | ControlValueText<T> | ControlValueSelect<T>;

  export type Control<T> = {
    type?: ControlType | undefined;
    value?: ControlValue<T> | undefined;
    defaultValue?: ControlValue<T> | undefined;
  };

  export type Meta = {
    url?: string | undefined;
    desc?: string | undefined;
    tags?: string[] | undefined;
    title?: string | undefined;
    import?: string | undefined;
  };

  export type ComponentProps = {
    meta: Meta | undefined;
    children: React.ReactNode | undefined;
  };

  export type ControlTextboxProps<T> = JSX.IntrinsicElements['input'] &
    Control<T> & {
      readonly?: boolean | undefined;
      label?: string | undefined;
    };

  export type ControlToggleProps<T> = JSX.IntrinsicElements['button'] &
    Control<T> & {
      readonly?: boolean | undefined;
      offLabel?: string | undefined;
      onLabel?: string | undefined;
    };

  export type ControlSelectOptionProps = JSX.IntrinsicElements['option'] & {
    readonly?: boolean | undefined;
    label?: string | undefined;
  };

  export type ControlSelectProps<T> = JSX.IntrinsicElements['select'] &
    Control<T> & {
      readonly?: boolean | undefined;
      options?: ControlSelectOptionProps[];
    };

  export function ControlTextbox<T extends string>(props: ControlTextboxProps<T>): JSX.Element;
  export function ControlToggle<T extends string>(props: ControlToggleProps<T>): JSX.Element;
  export function ControlSelect<T extends string>(props: ControlSelectProps<T>): JSX.Element;

  export function Controls(): JSX.Element;
  export function Display(): JSX.Element;
  export function Layout(): JSX.Element;
}
