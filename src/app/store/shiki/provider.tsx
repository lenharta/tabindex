import * as React from 'react';
import { type ThemeState, useThemeCTX } from '../theme/context';
import {
  type ShikiHighlight,
  type ShikiProviderProps,
  type ShikiHighlightState,
  ShikiContext,
} from './context';

const codeThemeModes: Record<ThemeState['mode'], string> = {
  dark: 'tabindex-code-theme-dark',
  light: 'tabindex-code-theme-light',
};

export function ShikiProvider({ children, loadShiki }: ShikiProviderProps) {
  const [shiki, setShiki] = React.useState<ShikiHighlightState>(null);
  const findCodeTheme = (mode: ThemeState['mode']): string => codeThemeModes[mode || 'dark'];
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

  return <ShikiContext.Provider value={highlight}>{children}</ShikiContext.Provider>;
}

export function useShiki() {
  const shiki = React.useContext(ShikiContext);

  if (!shiki) {
    return (code: string) => ({ code, highlighted: false });
  }

  return shiki;
}
