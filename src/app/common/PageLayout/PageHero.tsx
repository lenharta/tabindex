import { Title } from '@/components/common';

export type PageHeroProps = {
  title?: string;
  children?: React.ReactNode;
};

export const PageHero = (props: PageHeroProps) => {
  const { children, title } = props;
  return (
    <div className="PageHero">
      {title && <Title h1>{title}</Title>}
      {children}
    </div>
  );
};
