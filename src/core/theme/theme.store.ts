import { useContext } from 'react';
import { ThemeContext } from '@/core/theme';

export const useThemeStore = () => {
  return useContext(ThemeContext);
};
