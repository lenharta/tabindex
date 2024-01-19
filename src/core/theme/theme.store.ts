import * as React from 'react';
import { ThemeContext } from '@/core/theme';

export const useThemeStore = () => {
  return React.useContext(ThemeContext);
};
