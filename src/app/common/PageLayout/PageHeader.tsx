export type PageHeaderProps = {};

type LogoSpanProps = {
  accent?: boolean;
  text: string;
};

const LogoSpan = (props: LogoSpanProps) => {
  const { text, accent } = props;
  const color = accent ? 'var(--tbdx-blue-base-5)' : 'var(--tbdx-surface-base-text-1)';
  return <span style={{ color }}>{text}</span>;
};

const PageLogo = () => (
  <div>
    <LogoSpan text="Tab" />
    <LogoSpan text="index" accent />
  </div>
);

export const PageHeader = ({}: PageHeaderProps) => (
  <header className="PageHeader">
    <PageLogo />
  </header>
);
