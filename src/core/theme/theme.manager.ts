import { type TManagerTheme, type TMode } from '@/core/types';

export const createThemeStoreManager = (key: string): TManagerTheme => ({
  get: () => window.localStorage.getItem(key) as TMode | null,
  set: (value) => window.localStorage.setItem(key, value),
  clear: () => window.localStorage.removeItem(key),
});
