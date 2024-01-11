import { Page } from '@/app/layouts';

export const themeBreakpoints = {
  xs: '36em',
  sm: '48em',
  md: '62em',
  lg: '75em',
  xl: '88em',
};

export function Home() {
  return (
    <Page>
      <Page.Hero title="Home" />
      <Page.Content>
        <span>Page Content</span>
      </Page.Content>
    </Page>
  );
}
