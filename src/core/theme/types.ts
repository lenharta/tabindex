export type ThemeMode = 'light' | 'dark';
export type ThemeStorageKey = 'data-prefers-theme-mode';

export interface ThemeContextProviderProps {
  children: React.ReactNode;
}

export interface ThemeContextValue {
  mode: ThemeMode;
  next: ThemeMode;
  dark(): void;
  light(): void;
  toggle(): void;
}

export interface ThemeManagerReturn {
  set(mode: ThemeMode): void;
  get(): ThemeMode | null;
  clear(): void;
}
