import { Text } from '@/common';

export interface LogoProps {}

export type LogoComponent = React.FC<LogoProps>;

export const Logo: LogoComponent = () => {
  return (
    <div className="Logo">
      <Text>
        Tab<span style={{ color: 'var(--rgb-mode-dark-indigo)' }}>index</span>
      </Text>
    </div>
  );
};

Logo.displayName = 'app/Logo';
