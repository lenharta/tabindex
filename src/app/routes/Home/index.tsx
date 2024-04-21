import { Page } from '@/app/components';
import { ButtonGroup } from '@/common/Button/Group';
import { useThemeDispatch } from '@/store';
import { Button, Text, Title } from '@/common';

export const ModeControls = () => {
  const modes = ['light', 'dark'] as const;
  const dispatch = useThemeDispatch();
  return (
    <ButtonGroup>
      {modes.map((key) => (
        <Button key={key} onClick={() => dispatch({ mode: key })}>
          {key}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export function Home() {
  return (
    <Page>
      <Page.Hero>
        <Title h1 fz={16}>
          Tab<span style={{ color: 'var(--rgb-mode-dark-indigo)' }}>index</span>
        </Title>
      </Page.Hero>
      <Page.Content>
        <section className="sec sec-col">
          <Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus modi accusamus vel
            nemo! Possimus modi provident magni, voluptas ea fuga sunt laboriosam praesentium qui,
            voluptatibus accusantium aut, rem nam repellendus!
          </Text>
          <ModeControls />
        </section>
        <section className="sec sec-col">
          <Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus modi accusamus vel
            nemo! Possimus modi provident magni, voluptas ea fuga sunt laboriosam praesentium qui,
            voluptatibus accusantium aut, rem nam repellendus!
          </Text>
          <Button>Button</Button>
        </section>
        <section className="sec sec-col-2">
          <div className="box">
            <Text>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus modi accusamus vel
              nemo! Possimus modi provident magni, voluptas ea fuga sunt laboriosam praesentium qui,
              voluptatibus accusantium aut, rem nam repellendus!
            </Text>
            <Button>Button</Button>
          </div>
          <div className="box">
            <Text>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus modi accusamus vel
              nemo! Possimus modi provident magni, voluptas ea fuga sunt laboriosam praesentium qui,
              voluptatibus accusantium aut, rem nam repellendus!
            </Text>
            <Button>Button</Button>
          </div>
        </section>
      </Page.Content>
    </Page>
  );
}
