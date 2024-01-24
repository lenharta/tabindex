import * as React from 'react';
import { ShikiProvider } from './shiki.context';
import { type ThemeMode, useThemeCTX } from '../theme';
import { type ShikiHighlight, type ShikiProviderProps, type ShikiHighlightState } from './types';

const codeThemeModes: Record<ThemeMode, string> = {
  dark: 'tabindex-code-theme-dark',
  light: 'tabindex-code-theme-light',
};

export function ShikiContextProvider({ children, loadShiki }: ShikiProviderProps) {
  const [shiki, setShiki] = React.useState<ShikiHighlightState>(null);
  const findCodeTheme = (mode: ThemeMode): string => codeThemeModes[mode || 'dark'];
  const theme = useThemeCTX();

  React.useEffect(() => {
    loadShiki().then((s) => setShiki(s));
  }, []);

  const highlight: ShikiHighlight = React.useCallback(
    (code, language = 'tsx') => {
      if (!shiki) {
        return { code, highlighted: false };
      }

      return {
        highlighted: true,
        code: shiki.codeToHtml(code, {
          theme: findCodeTheme(theme.mode),
          lang: language,
        }),
      };
    },
    [shiki, theme]
  );

  return <ShikiProvider value={highlight}>{children}</ShikiProvider>;
}
