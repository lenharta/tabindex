import { Title } from '@/components/common';

export type PageHeroProps = {
  title?: string;
  children?: React.ReactNode;
};

export const PageHero = (props: PageHeroProps) => {
  const { children, title } = props;
  return (
    <div className="tbdx-page-hero">
      {title && (
        <Title h1 className="tbdx-page-title">
          {title}
        </Title>
      )}
      {children}
    </div>
  );
};
