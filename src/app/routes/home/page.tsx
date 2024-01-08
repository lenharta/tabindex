import { Page } from '@/app/layouts';
import { Title } from '@/common/Title';

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
        <Title as="h2">Content</Title>
      </Page.Content>
    </Page>
  );
}
