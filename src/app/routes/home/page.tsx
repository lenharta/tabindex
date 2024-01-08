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
        <Title size="xl" align="left">
          Title XL
        </Title>
        <Title size="lg" align="left">
          Title LG
        </Title>
        <Title size="md" align="left">
          Title MD
        </Title>
        <Title size="sm" align="left">
          Title SM
        </Title>
        <Title size="xs" align="left">
          Title XS
        </Title>
      </Page.Content>
    </Page>
  );
}
