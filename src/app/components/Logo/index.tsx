import { Link } from 'react-router-dom';

export interface LogoProps {}

export type LogoComponent = React.FC<LogoProps>;

export const Logo: LogoComponent = () => {
  return (
    <Link
      to="/"
      title="AnatomyUI"
      className="Logo ff-plex"
      aria-label="anatomy user interface logo"
    >
      <span className="fw-lgt">Tab</span>
      <span style={{ color: 'var(--c-accent)' }} className="fw-lgt">
        index
      </span>
    </Link>
  );
};

Logo.displayName = 'app/Logo';
