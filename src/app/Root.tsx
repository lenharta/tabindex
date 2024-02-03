import { Outlet } from 'react-router-dom';
import { ShikiProvider, ThemeProvider } from './store';
import { codeThemeDark, codeThemeLight } from './store/shiki/theme';

async function loadShiki() {
  const { getHighlighter } = await import('shikiji');
  const shiki = await getHighlighter({
    langs: ['tsx', 'scss', 'html', 'bash', 'json'],
    themes: [codeThemeLight, codeThemeDark],
  });
  return shiki;
}

export const Root = () => (
  <ThemeProvider>
    <ShikiProvider loadShiki={loadShiki}>
      <Outlet />
    </ShikiProvider>
  </ThemeProvider>
);
