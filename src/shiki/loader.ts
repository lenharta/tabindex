import { EDITOR_THEME_DARK, EDITOR_THEME_LIGHT } from './theme';

async function loader() {
  const { getHighlighter } = await import('shiki');

  const shiki = await getHighlighter({
    langs: ['tsx', 'css', 'scss', 'html', 'bash', 'json', 'js', 'jsx'],
    themes: [EDITOR_THEME_LIGHT, EDITOR_THEME_DARK],
  });

  return shiki;
}

export { loader };
