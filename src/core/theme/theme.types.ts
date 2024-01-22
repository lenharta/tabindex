export type TBDXSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type TBDXDimension = Record<'height' | 'width', string | number | undefined>;
export type TBDXCoordinate = Record<'x' | 'y', string | number | undefined>;

export type TBDXPosition = 'bottom' | 'left' | 'right' | 'top';
export type TBDXAlignment = 'center' | 'end' | 'start';
export type TBDXPlacement = TBDXAlignment | `${TBDXPosition}_${TBDXAlignment}`;
export type TBDXOrientation = 'horizontal' | 'vertical';

export type TBDXFontStyle = 'normal' | 'italic';
export type TBDXFontWeight = 'xlight' | 'light' | 'medium' | 'bold' | 'xbold';

export type TBDXThemeMode = 'light' | 'dark';
export type TBDXThemeStorageKey = 'data-prefers-theme-mode';

export interface TBDXThemeContextValue {
  mode: TBDXThemeMode;
  next: TBDXThemeMode;
  dark(): void;
  light(): void;
  toggle(): void;
}

export interface TBDXThemeManagerReturn {
  set(mode: TBDXThemeMode): void;
  get(): TBDXThemeMode | null;
  clear(): void;
}

export type TBDXButtonScheme = 'default' | 'secondary' | 'action';
export type TBDXButtonVariant = 'ghost' | 'outlined' | 'solid' | 'text' | 'tonal';

export interface TBDXButtonThemeOptions {
  size?: TBDXSize | undefined;
  scheme?: TBDXButtonScheme | undefined;
  variant?: TBDXButtonVariant | undefined;
  alignment?: TBDXAlignment | undefined;
}

export type TBDXRadioScheme = 'default' | 'secondary' | 'action';
export type TBDXRadioVariant = 'filled' | 'outlined';

export interface TBDXRadioThemeOptions {
  size?: TBDXSize | undefined;
  scheme?: TBDXRadioScheme | undefined;
  variant?: TBDXRadioVariant | undefined;
  alignment?: TBDXAlignment | undefined;
}

export type TBDXToggleScheme = 'default' | 'secondary' | 'action';
export type TBDXToggleVariant = 'filled' | 'outlined';

export interface TBDXToggleThemeOptions {
  size?: TBDXSize | undefined;
  scheme?: TBDXToggleScheme | undefined;
  variant?: TBDXToggleVariant | undefined;
  alignment?: TBDXAlignment | undefined;
}

export type TBDXCheckboxScheme = 'default' | 'secondary' | 'action';
export type TBDXCheckboxVariant = 'filled' | 'outlined';

export interface TBDXCheckboxThemeOptions {
  size?: TBDXSize | undefined;
  scheme?: TBDXCheckboxScheme | undefined;
  variant?: TBDXCheckboxVariant | undefined;
  alignment?: TBDXAlignment | undefined;
}

export type TBDXTextScheme = 'default' | 'secondary' | 'action';
export type TBDXTextVariant = 'default' | 'outlined' | 'gradient';

export interface TBDXTextThemeOptions {
  size?: TBDXSize | undefined;
  scheme?: TBDXTextScheme | undefined;
  variant?: TBDXTextVariant | undefined;
  alignment?: TBDXAlignment | undefined;
}

export type TBDXTitleScheme = 'default' | 'secondary' | 'action';
export type TBDXTitleVariant = 'default' | 'outlined' | 'gradient';

export interface TBDXTitleThemeOptions {
  size?: TBDXSize | undefined;
  scheme?: TBDXTitleScheme | undefined;
  variant?: TBDXTitleVariant | undefined;
  alignment?: TBDXAlignment | undefined;
}

export interface TBDXThemeOptions {
  Text: TBDXTextThemeOptions;
  Title: TBDXTitleThemeOptions;
  Radio: TBDXRadioThemeOptions;
  Toggle: TBDXToggleThemeOptions;
  Button: TBDXButtonThemeOptions;
  Checkbox: TBDXCheckboxThemeOptions;
}

export type TBDXComponent = keyof TBDXThemeOptions;
