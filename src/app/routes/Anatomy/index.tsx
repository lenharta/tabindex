import { Page } from '@/app/components';
import { Text, Title } from '@/common';
import { Anatomy } from '@/app/anatomy';

const TestExpansion = () => {
  return (
    <div className="Anatomy-expansion-test">
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam assumenda aliquam similique
        aperiam vitae illo a repellendus doloribus velit tenetur? Ex asperiores labore atque, quidem
        ipsum non dolorem nihil laudantium.
      </Text>
    </div>
  );
};

export function AnatomyRoute() {
  return (
    <Page>
      <Page.Hero>
        <Title h1>Anatomy</Title>
      </Page.Hero>
      <Page.Content>
        <Page.Section>
          <Anatomy className="Anatomy-demo-menu">
            <Anatomy.Label />
            <div className="Anatomy-demo-menu-group" data-anatomy-scheme="accent-border">
              <Anatomy.Item scheme="accent" />
              <Anatomy.Item scheme="accent" />
              <Anatomy.Item scheme="accent" expansion={<TestExpansion />} />
            </div>
          </Anatomy>
        </Page.Section>
      </Page.Content>
    </Page>
  );
}
