import { Text, Title } from '@/common';
import { Page } from '@/components';

function Proto() {
  return (
    <Page>
      <Page.Hero title={<Title as="h1">Prototype</Title>} />
      <Page.Main>
        <section>
          <Title as="h2">Title Size</Title>
          <div>
            <Title size="xs">Example Title</Title>
            <Title size="sm">Example Title</Title>
            <Title size="md">Example Title</Title>
            <Title size="lg">Example Title</Title>
            <Title size="xl">Example Title</Title>
          </div>
        </section>

        <section>
          <Title as="h2">Text Sizes</Title>
          <div>
            <Text size="xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, maxime ipsa harum natus
              recusandae nihil, officia eaque tenetur non tempora voluptatibus doloremque.
              Quibusdam, temporibus perferendis debitis cum necessitatibus quos similique?
            </Text>
            <Text size="sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, maxime ipsa harum natus
              recusandae nihil, officia eaque tenetur non tempora voluptatibus doloremque.
              Quibusdam, temporibus perferendis debitis cum necessitatibus quos similique?
            </Text>
            <Text size="md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, maxime ipsa harum natus
              recusandae nihil, officia eaque tenetur non tempora voluptatibus doloremque.
              Quibusdam, temporibus perferendis debitis cum necessitatibus quos similique?
            </Text>
            <Text size="lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, maxime ipsa harum natus
              recusandae nihil, officia eaque tenetur non tempora voluptatibus doloremque.
              Quibusdam, temporibus perferendis debitis cum necessitatibus quos similique?
            </Text>
            <Text size="xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, maxime ipsa harum natus
              recusandae nihil, officia eaque tenetur non tempora voluptatibus doloremque.
              Quibusdam, temporibus perferendis debitis cum necessitatibus quos similique?
            </Text>
          </div>
        </section>
      </Page.Main>
    </Page>
  );
}

Proto.displayName = 'Routes.Proto';
export { Proto };
