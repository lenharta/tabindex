import { STORE } from '@/types';
import { Button, Divider } from '@/common';
import { useThemeDispatch, useThemeStore } from '@/store';

type ControlRole = React.JSX.IntrinsicElements['div']['role'];
type ControlVariant = 'default' | 'checkbox' | 'radio';

type ControlItem<T extends keyof STORE.ThemeState> = {
  id: string;
  value: STORE.ThemeState[T];
  label: string;
};

export const LOOKUP_CONTROL_ROLE: Record<ControlVariant, ControlRole> = {
  radio: 'menuitemradio',
  default: 'menuitem',
  checkbox: 'menuitemcheckbox',
};

export const siteModeOptions: ControlItem<'mode'>[] = [
  { id: 'site-ctrl-mode-a', label: 'Dark', value: 'dark' },
  { id: 'site-ctrl-mode-b', label: 'Light', value: 'light' },
];

export const siteDirOptions: ControlItem<'dir'>[] = [
  { id: 'site-ctrl-dir-a', label: 'Left-To-Right', value: 'ltr' },
  { id: 'site-ctrl-dir-b', label: 'Right-To-Left', value: 'rtl' },
];

export const siteAccentOptions: ControlItem<'accent'>[] = [
  { id: 'site-ctrl-accent-a', label: 'Red', value: 'red' },
  { id: 'site-ctrl-accent-b', label: 'Orange', value: 'orange' },
  { id: 'site-ctrl-accent-c', label: 'Yellow', value: 'yellow' },
  { id: 'site-ctrl-accent-d', label: 'Green', value: 'green' },
  { id: 'site-ctrl-accent-e', label: 'Mint', value: 'mint' },
  { id: 'site-ctrl-accent-f', label: 'Teal', value: 'teal' },
  { id: 'site-ctrl-accent-g', label: 'Cyan', value: 'cyan' },
  { id: 'site-ctrl-accent-h', label: 'Blue', value: 'blue' },
  { id: 'site-ctrl-accent-i', label: 'Indigo', value: 'indigo' },
  { id: 'site-ctrl-accent-j', label: 'Purple', value: 'purple' },
  { id: 'site-ctrl-accent-k', label: 'Pink', value: 'pink' },
  { id: 'site-ctrl-accent-l', label: 'Brown', value: 'brown' },
  { id: 'site-ctrl-accent-m', label: 'Gray', value: 'gray' },
];

interface ControlOptionProps<T extends keyof STORE.ThemeState> extends ControlItem<T> {
  name: T;
  variant: ControlVariant;
  current: STORE.ThemeContext;
  onChange: STORE.ThemeDispatch;
}

export function ControlOption<T extends keyof STORE.ThemeState>(props: ControlOptionProps<T>) {
  const { onChange, variant = 'default', name, current, ...item } = props;
  const payload = { [name]: item.value };
  const isSelected = payload[name] === current[name];
  return (
    <Button
      role={LOOKUP_CONTROL_ROLE[variant]}
      onClick={() => onChange({ [name]: item.value })}
      data-selected={!!isSelected || undefined}
      className="site-controls-option"
      children={item.label}
    />
  );
}

export const Controls: React.FC<{}> = ({}) => {
  const dispatch = useThemeDispatch();
  const theme = useThemeStore();
  return (
    <div className="site-controls">
      <div className="site-controls-group" role="presentation">
        <Divider label="Mode Controls" />
        <Button.Group orientation="horizontal">
          {siteDirOptions.map((item) => (
            <ControlOption
              id={item.id}
              key={item.id}
              label={item.label}
              value={item.value}
              onChange={dispatch}
              variant="default"
              current={theme}
              name="dir"
            />
          ))}
        </Button.Group>
      </div>

      <div className="site-controls-group" role="presentation">
        <Divider label="Mode Controls" />
        <Button.Group orientation="horizontal">
          {siteModeOptions.map((item) => (
            <ControlOption
              id={item.id}
              key={item.id}
              label={item.label}
              value={item.value}
              onChange={dispatch}
              variant="default"
              current={theme}
              name="mode"
            />
          ))}
        </Button.Group>
      </div>

      <div className="site-controls-group" role="presentation">
        <Divider label="Accent Controls" />
        <Button.Group orientation="horizontal">
          {siteAccentOptions.map((item) => (
            <ControlOption
              id={item.id}
              key={item.id}
              label={item.label}
              value={item.value}
              onChange={dispatch}
              variant="default"
              current={theme}
              name="accent"
            />
          ))}
        </Button.Group>
      </div>
    </div>
  );
};
