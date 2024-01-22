import * as React from 'react';
import { type TBDXThemeMode, useThemeStore } from '@/core/theme';
import { ShikiContext } from './shiki.context';
import {
  type ShikiHighlight,
  type ShikiProviderProps,
  type ShikiHighlightState,
} from './shiki.types';

export function ShikiContextProvider({ children, loadShiki }: ShikiProviderProps) {
  const [shiki, setShiki] = React.useState<ShikiHighlightState>(null);
  const theme = useThemeStore();

  const getCodeTheme = (mode: TBDXThemeMode): string =>
    ({
      light: `tabindex-code-theme-light`,
      dark: `tabindex-code-theme-dark`,
    })[mode];

  React.useEffect(() => {
    loadShiki().then((s) => setShiki(s));
  }, []);

  const highlight: ShikiHighlight = React.useCallback(
    (code, language = 'tsx') => {
      if (!shiki) {
        return { code, highlighted: false };
      }

      return {
        code: shiki.codeToHtml(code, {
          lang: language,
          theme: getCodeTheme(theme.mode) || 'tabindex-code-theme-dark',
        }),
        highlighted: true,
      };
    },
    [shiki, theme]
  );

  return <ShikiContext.Provider value={highlight}>{children}</ShikiContext.Provider>;
}
