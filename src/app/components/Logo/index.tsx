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
      <span className="fw-reg">Anatomy</span>
      <span style={{ color: 'var(--c-accent)' }} className="fw-lgt">
        Ui
      </span>
    </Link>
  );
};

Logo.displayName = 'app/Logo';
