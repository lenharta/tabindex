import { Core } from '@/types';

type PageHeroProps = Omit<Core.Props<'section'>, 'title'> & {
  title?: React.ReactNode | undefined;
};

function PageHero(props: PageHeroProps) {
  const { title = null, children, ...otherProps } = props;
  return (
    <section className="tbx-page-hero" {...otherProps}>
      <div className="tbx-page-hero-layout">
        {title}
        {children}
      </div>
    </section>
  );
}

PageHero.displayName = 'Page.Hero';
export { PageHero };
