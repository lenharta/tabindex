import { Page } from '@/app/common';
import { Button } from '@/components/common';

const ButtonGalleryState = () => (
  <Button.Group orientation="vertical">
    <Button children="Button (enabled)" />
    <Button children="Button (disabled)" isDisabled />
    <Button children="Button (readOnly)" isReadOnly />
  </Button.Group>
);

const ButtonGalleryScheme = () => (
  <Button.Group orientation="vertical">
    <Button scheme="action" children="Button (action)" />
    <Button scheme="primary" children="Button (primary)" />
    <Button scheme="secondary" children="Button (secondary)" />
  </Button.Group>
);

const ButtonGalleryVariant = () => (
  <Button.Group orientation="vertical">
    <Button variant="ghost" children="Button (primary)" />
    <Button variant="outlined" children="Button (action)" />
    <Button variant="solid" children="Button (secondary)" />
    <Button variant="tonal" children="Button (secondary)" />
  </Button.Group>
);

export const ButtonGallery = () => (
  <>
    <Page.Hero title="Button Gallery" />
    <Page.Content>
      <ButtonGalleryState />
      <ButtonGalleryScheme />
      <ButtonGalleryVariant />
    </Page.Content>
  </>
);
