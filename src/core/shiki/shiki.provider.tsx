import * as React from 'react';
import { ShikiContext } from '@/core/shiki';
import { useThemeStore } from '@/core/theme';
import {
  type TMode,
  type TShikiHighlight,
  type TShikiHighlightState,
  type TShikiProviderValue,
} from '@/core/types';

export function ShikiContextProvider({ children, loadShiki }: TShikiProviderValue) {
  const [shiki, setShiki] = React.useState<TShikiHighlightState>(null);
  const theme = useThemeStore();

  const getCodeTheme = (mode: TMode): string =>
    ({
      light: `tabindex-code-theme-light`,
      dark: `tabindex-code-theme-dark`,
    })[mode];

  React.useEffect(() => {
    loadShiki().then((s) => setShiki(s));
  }, []);

  const highlight: TShikiHighlight = React.useCallback(
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
