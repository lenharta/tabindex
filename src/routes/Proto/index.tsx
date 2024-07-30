import { Page } from '@/common';
import { Text, Title } from '@/core';

const DATA = [
  {
    label: 'Tomato',
    value: 'sauce-tomato',
    category: 'sauce',
    calories: 30,
    protein: 1,
    carbs: 7,
    fat: 0,
  },
  {
    label: 'Pesto',
    value: 'sauce-pesto',
    category: 'sauce',
    calories: 80,
    protein: 2,
    carbs: 1,
    fat: 8,
  },
  {
    label: 'Alfredo',
    value: 'sauce-alfredo',
    category: 'sauce',
    calories: 90,
    protein: 2,
    carbs: 2,
    fat: 9,
  },
  {
    label: 'Barbecue',
    value: 'sauce-barbecue',
    category: 'sauce',
    calories: 60,
    protein: 0,
    carbs: 16,
    fat: 0,
  },
  {
    label: 'Buffalo',
    value: 'sauce-buffalo',
    category: 'sauce',
    calories: 5,
    protein: 0,
    carbs: 1,
    fat: 0,
  },
];

function Proto() {
  return (
    <Page>
      <Page.Hero title={<Title as="h1">Prototyping</Title>} />
      <Page.Main>
        <section>
          <Title as="h2">Token | Colors</Title>
        </section>

        <section>
          <Title as="h2">Typography | Title</Title>
          <Title fz="xs">Example Title</Title>
          <Title fz="sm">Example Title</Title>
          <Title fz="md">Example Title</Title>
          <Title fz="lg">Example Title</Title>
          <Title fz="xl">Example Title</Title>
        </section>

        <section>
          <Title as="h2">Typography | Text</Title>
          <Text fz="xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, maxime ipsa harum natus
            recusandae nihil, officia eaque tenetur non tempora voluptatibus doloremque. Quibusdam,
            temporibus perferendis debitis cum necessitatibus quos similique?
          </Text>
          <Text fz="sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, maxime ipsa harum natus
            recusandae nihil, officia eaque tenetur non tempora voluptatibus doloremque. Quibusdam,
            temporibus perferendis debitis cum necessitatibus quos similique?
          </Text>
          <Text fz="md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, maxime ipsa harum natus
            recusandae nihil, officia eaque tenetur non tempora voluptatibus doloremque. Quibusdam,
            temporibus perferendis debitis cum necessitatibus quos similique?
          </Text>
          <Text fz="lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, maxime ipsa harum natus
            recusandae nihil, officia eaque tenetur non tempora voluptatibus doloremque. Quibusdam,
            temporibus perferendis debitis cum necessitatibus quos similique?
          </Text>
          <Text fz="xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, maxime ipsa harum natus
            recusandae nihil, officia eaque tenetur non tempora voluptatibus doloremque. Quibusdam,
            temporibus perferendis debitis cum necessitatibus quos similique?
          </Text>
        </section>
      </Page.Main>
    </Page>
  );
}

Proto.displayName = 'Routes.Proto';
export { Proto };
