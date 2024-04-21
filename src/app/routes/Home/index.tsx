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
        <Title h1>
          Tab<span style={{ color: 'var(--rgb-mode-dark-indigo)' }}>index</span>
        </Title>
      </Page.Hero>
      <Page.Content>
        <section className="sec">
          <ModeControls />
        </section>
      </Page.Content>
    </Page>
  );
}
