import { Page } from '@/app/common';
import { Button, ButtonScheme, ButtonVariant, Title } from '@/components/common';
import { useThemeCTX } from '@/core/theme';
import { capitalize } from '@/utils';

const commonProps = { children: 'Button' };

const ModeSwitch = () => {
  const theme = useThemeCTX();
  const { toggle, next } = theme;
  const content = `Go ${capitalize(next)} Mode`;
  return <Button onClick={toggle} scheme="secondary" children={content} />;
};

const ButtonGalleryWrapper = ({
  children,
  title,
}: {
  title?: string;
  children: React.ReactNode;
}) => {
  const css = {
    root: 'tbdx-button-gallery',
    title: 'tbdx-button-gallery-title',
    divider: 'tbdx-button-gallery-divider',
    content: 'tbdx-button-gallery-content',
  };
  return (
    <div className={css.root}>
      {title && <Title h2 className={css.title} children={title} />}
      <div className={css.divider} />
      <div className={css.content}>{children}</div>
    </div>
  );
};

const ButtonGalleryState = () => (
  <ButtonGalleryWrapper title="States">
    <Button.Group orientation="vertical">
      <Button {...commonProps} children="Enabled" />
      <Button {...commonProps} children="Disabled" isDisabled />
      <Button {...commonProps} children="ReadOnly" isReadOnly />
    </Button.Group>
  </ButtonGalleryWrapper>
);

const ButtonGalleryScheme = () => (
  <ButtonGalleryWrapper title="Schemes">
    <Button.Group orientation="vertical">
      <Button {...commonProps} scheme="action" />
      <Button {...commonProps} scheme="danger" />
      <Button {...commonProps} scheme="success" />
      <Button {...commonProps} scheme="warning" />
      <Button {...commonProps} scheme="primary" />
      <Button {...commonProps} scheme="secondary" />
    </Button.Group>
  </ButtonGalleryWrapper>
);

const variants: ButtonVariant[] = [
  'solid',
  'tonal',
  'tonal-outlined',
  'ghost-outlined',
  'ghost',
  'text',
];

const ButtonGalleryVariant = ({ scheme = 'primary' }: { scheme?: ButtonScheme }) => (
  <ButtonGalleryWrapper>
    <Button.Group orientation="vertical">
      <Button {...commonProps} scheme={scheme} variant="solid" />
      <Button {...commonProps} scheme={scheme} variant="tonal-outlined" />
      <Button {...commonProps} scheme={scheme} variant="ghost-outlined" />
      <Button {...commonProps} scheme={scheme} variant="tonal" />
      <Button {...commonProps} scheme={scheme} variant="ghost" />
      <Button {...commonProps} scheme={scheme} variant="text" />
    </Button.Group>
  </ButtonGalleryWrapper>
);

export const ButtonGallery = () => (
  <>
    <Page.Hero title="Button Gallery" />
    <Page.Content>
      <Title>Theme Mode</Title>
      <ModeSwitch />
      {/* <ButtonGalleryState /> */}
      {/* <ButtonGalleryScheme /> */}
      <ButtonGalleryVariant scheme="primary" />
      <ButtonGalleryVariant scheme="secondary" />
      <ButtonGalleryVariant scheme="action" />
      <ButtonGalleryVariant scheme="danger" />
      <ButtonGalleryVariant scheme="success" />
      <ButtonGalleryVariant scheme="warning" />
      <ButtonGalleryVariant scheme="accent-orange" />
      <ButtonGalleryVariant scheme="accent-yellow" />
      <ButtonGalleryVariant scheme="accent-green" />
      <ButtonGalleryVariant scheme="accent-cyan" />
      <ButtonGalleryVariant scheme="accent-blue" />
      <ButtonGalleryVariant scheme="accent-indigo" />
      <ButtonGalleryVariant scheme="accent-purple" />
      <ButtonGalleryVariant scheme="accent-violet" />
      <ButtonGalleryVariant scheme="accent-pink" />
      <ButtonGalleryVariant scheme="accent-magenta" />
      <ButtonGalleryVariant scheme="accent-red" />
    </Page.Content>
  </>
);
