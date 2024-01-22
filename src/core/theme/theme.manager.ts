import {
  type TBDXThemeMode,
  type TBDXThemeStorageKey,
  type TBDXThemeManagerReturn,
} from './theme.types';

export const createThemeStoreManager = (key: TBDXThemeStorageKey): TBDXThemeManagerReturn => ({
  get: () => window.localStorage.getItem(key) as TBDXThemeMode | null,
  set: (value) => window.localStorage.setItem(key, value),
  clear: () => window.localStorage.removeItem(key),
});
