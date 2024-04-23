import clsx from 'clsx';
import React from 'react';
import { Link } from 'react-router-dom';

export interface LogoProps {
  label?: string | undefined;
  title?: string | undefined;
  children?: React.ReactNode | undefined;
  className?: string | undefined;
}

export type LogoComponent = React.FC<LogoProps>;

const LogoElement = (
  <React.Fragment>
    <span className="logo-span--left">Tab</span>
    <span className="logo-span--right">index</span>
  </React.Fragment>
);

export const Logo: LogoComponent = ({
  label = 'tabindex logo',
  title = 'Tabindex Logo',
  children,
  className,
}: LogoProps) => {
  return (
    <Link
      to="/"
      title={title}
      children={children || LogoElement}
      className={clsx('logo', className)}
      aria-label={label}
    />
  );
};

Logo.displayName = 'app/Logo';
