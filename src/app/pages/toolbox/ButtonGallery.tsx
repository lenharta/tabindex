import { Page } from '@/app/common';
import { Button, ButtonScheme, Title } from '@/components/common';

const commonProps = { children: 'Button' };

const ButtonGalleryState = () => (
  <Button.Group orientation="vertical">
    <Button {...commonProps} children="Enabled" />
    <Button {...commonProps} children="Disabled" isDisabled />
    <Button {...commonProps} children="ReadOnly" isReadOnly />
  </Button.Group>
);

const ButtonGalleryScheme = () => (
  <Button.Group orientation="vertical">
    <Button {...commonProps} scheme="action" />
    <Button {...commonProps} scheme="danger" />
    <Button {...commonProps} scheme="success" />
    <Button {...commonProps} scheme="warning" />
    <Button {...commonProps} scheme="primary" />
    <Button {...commonProps} scheme="secondary" />
  </Button.Group>
);

const ButtonGalleryVariant = ({ scheme = 'primary' }: { scheme?: ButtonScheme }) => (
  <Button.Group orientation="vertical">
    <Button {...commonProps} scheme={scheme} variant="solid" />
    <Button {...commonProps} scheme={scheme} variant="outlined" />
    <Button {...commonProps} scheme={scheme} variant="tonal" />
    <Button {...commonProps} scheme={scheme} variant="ghost" />
  </Button.Group>
);

export const ButtonGallery = () => (
  <>
    <Page.Hero title="Button Gallery" />
    <Page.Content>
      <Title>States</Title>
      <ButtonGalleryState />
      <Title>Schemes</Title>
      <ButtonGalleryScheme />
      <Title>Variants</Title>
      <ButtonGalleryVariant scheme="action" />
      <ButtonGalleryVariant scheme="danger" />
      <ButtonGalleryVariant scheme="success" />
      <ButtonGalleryVariant scheme="warning" />
      <ButtonGalleryVariant scheme="primary" />
      <ButtonGalleryVariant scheme="secondary" />
    </Page.Content>
  </>
);
