import * as React from 'react';
import { App, Shiki } from '@/types';
import { useThemeState } from '@/store';

const ShikiContext = React.createContext<Shiki.Generator | null>(null);

const CODE_THEME_MAP: Record<App.Mode, string> = {
  light: 'tbx-code-theme-light',
  dark: 'tbx-code-theme-dark',
};

function ShikiProvider(props: Shiki.ProviderProps) {
  const { children, loader } = props;

  const [shiki, setShiki] = React.useState<Shiki.State | null>(null);

  const { mode } = useThemeState();

  React.useEffect(() => {
    loader().then((payload) => setShiki(payload));
  }, []);

  const highlight: Shiki.Generator = React.useCallback(
    (code, lang = 'tsx') => {
      if (!shiki) {
        return {
          highlighted: false,
          code,
        };
      } else {
        return {
          highlighted: true,
          code: shiki.codeToHtml(code, {
            theme: CODE_THEME_MAP[mode] || 'tbx-code-theme-dark',
            lang,
          }),
        };
      }
    },
    [shiki, mode]
  );

  return (
    <ShikiContext.Provider value={highlight}>
      <React.Fragment>{children}</React.Fragment>
    </ShikiContext.Provider>
  );
}

function useShiki() {
  const ctx = React.useContext(ShikiContext);

  if (!ctx) {
    return (code: string) => ({ code, highlighted: false });
  } else {
    return ctx;
  }
}

export { ShikiContext, ShikiProvider, useShiki };

// import { useContext } from 'react';
// import { ShikiContext } from './context';

// export function useShiki() {
//   const shiki = useContext(ShikiContext);

//   if (!shiki) {
//     return (code: string) => ({ code, highlighted: false });
//   }
//   return shiki;
// }

// import * as React from 'react';
// import { ShikiProviderProps, SnippetCode, SnippetState } from './types';
// import { useStore } from '../store';
// import { Theme } from '@/types';

// export const ShikiContext = React.createContext<SnippetCode | null>(null);

// export type CodeThemeKey = `v2-code-theme-${CodeThemeMode}`;
// export type CodeThemeMode = Theme.Mode;
// export type CodeThemeLookup = Record<CodeThemeMode, CodeThemeKey>;

// export function ShikiProvider({ children, loadShiki }: ShikiProviderProps) {
//   const [shiki, setShiki] = React.useState<SnippetState>(null);

//   const store = useStore();

//   const themes: Record<Theme.Mode, string> = {
//     light: `v2-code-theme-light`,
//     dark: `v2-code-theme-dark`,
//     dim: `v2-code-theme-dark`,
//   };

//   React.useEffect(() => {
//     loadShiki().then((s) => setShiki(s));
//   }, []);

//   const highlight: SnippetCode = React.useCallback(
//     (code, language = 'tsx') => {
//       if (!shiki) {
//         return { code, highlighted: false };
//       }

//       return {
//         code: shiki.codeToHtml(code, {
//           lang: language,
//           theme: themes[mode] || 'v2-code-theme-dark',
//         }),
//         highlighted: true,
//       };
//     },
//     [shiki, store]
//   );

//   return <ShikiContext.Provider value={highlight}>{children}</ShikiContext.Provider>;
// }
