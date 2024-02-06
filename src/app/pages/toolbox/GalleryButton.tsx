import { Page } from '@/app/common';
import { Button, ButtonGroup } from '@/components/common';

export const GalleryButton = () => (
  <>
    <Page.Hero title="Button Gallery" />
    <Page.Content>
      <Button>Default Button</Button>
      <Button scheme="primary">Primary Button</Button>
      <Button scheme="secondary">Secondary Button</Button>

      <ButtonGroup>
        <Button accent="orange">Button</Button>
        <Button accent="yellow">Button</Button>
        <Button accent="green">Button</Button>
        <Button accent="cyan">Button</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button accent="blue">Button</Button>
        <Button accent="indigo">Button</Button>
        <Button accent="purple">Button</Button>
        <Button accent="violet">Button</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button accent="magenta">Button</Button>
        <Button accent="pink">Button</Button>
        <Button accent="red">Button</Button>
      </ButtonGroup>
    </Page.Content>
  </>
);
