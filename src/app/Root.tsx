import { Outlet } from 'react-router-dom';
import { ThemeContextProvider } from '@/core/theme';
import { ShikiContextProvider, codeThemeDark, codeThemeLight } from '@/core/shiki';

async function loadShiki() {
  const { getHighlighter } = await import('shikiji');
  const shiki = await getHighlighter({
    langs: ['tsx', 'scss', 'html', 'bash', 'json'],
    themes: [codeThemeLight, codeThemeDark],
  });
  return shiki;
}

export default function Root() {
  return (
    <ThemeContextProvider>
      <ShikiContextProvider loadShiki={loadShiki}>
        <Outlet />
      </ShikiContextProvider>
    </ThemeContextProvider>
  );
}
