import { Page } from '@/app/components';
import { Button, Text, Title } from '@/common';
import { ButtonGroup } from '@/common/Button/Group';

export function Demo() {
  return (
    <Page>
      <Page.Hero>
        <Title h1 fz={16} ff="plex" fw="lgt">
          Demo
        </Title>
      </Page.Hero>
      <Page.Content>
        <Text>Buttons</Text>
        <ButtonGroup size="xl">
          <Button size="xs" theme="default">
            Button XS
          </Button>
          <Button size="sm" theme="default">
            Button SM
          </Button>
          <Button size="md" theme="default">
            Button MD
          </Button>
          <Button size="lg" theme="default">
            Button LG
          </Button>
          <Button size="xl" theme="default">
            Button XL
          </Button>
        </ButtonGroup>
      </Page.Content>
    </Page>
  );
}
