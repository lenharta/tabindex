import { Page } from '@/app/components';
import { ButtonGroup } from '@/common/Button/Group';
import { useThemeDispatch } from '@/store';
import { Button, Title } from '@/common';

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
        <Title h1 className="ff-plex">
          <span className="fw-reg">Anatomy</span>
          <span style={{ color: 'var(--c-accent)' }} className="fw-lgt">
            Ui
          </span>
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
