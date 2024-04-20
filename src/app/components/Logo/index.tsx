export interface LogoProps {}

export type LogoComponent = React.FC<LogoProps>;

export const Logo: LogoComponent = () => {
  return (
    <div className="Logo">
      <span>Logo</span>
    </div>
  );
};

Logo.displayName = 'app/Logo';
