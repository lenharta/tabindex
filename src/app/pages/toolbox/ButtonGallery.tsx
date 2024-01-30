import { Button, ButtonProps, Title } from '@/components/common';

type ButtonItemProps = ButtonProps & {
  id: string;
};

type ButtonRowProps = { title?: string; config: ButtonItemProps[] };

export const ButtonRow = (props: ButtonRowProps) => {
  const { title, config } = props;
  return (
    <div>
      {title && <Title h2>{title}</Title>}
      <div>
        {config.map((item) => {
          if (!item.id) return null;
          return <Button key={item.id} id={item.id} />;
        })}
      </div>
    </div>
  );
};

export const ButtonGalleryState = () => (
  <ButtonRow
    title="Button (state)"
    config={[
      { id: 'button_state_A', label: 'Button' },
      { id: 'button_state_B', label: 'Button' },
      { id: 'button_state_C', label: 'Button' },
    ]}
  />
);

export const ButtonGalleryScheme = () => (
  <ButtonRow
    title="Button (scheme)"
    config={[
      { id: 'button_scheme_A', label: 'Button' },
      { id: 'button_scheme_B', label: 'Button' },
      { id: 'button_scheme_C', label: 'Button' },
    ]}
  />
);

export const ButtonGalleryVariant = () => (
  <ButtonRow
    title="Button (variant)"
    config={[
      { id: 'button_variant_A', label: 'Button' },
      { id: 'button_variant_B', label: 'Button' },
      { id: 'button_variant_C', label: 'Button' },
    ]}
  />
);

export const ButtonGallery = () => (
  <>
    <ButtonGalleryState />
    <ButtonGalleryScheme />
    <ButtonGalleryVariant />
  </>
);
