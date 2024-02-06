import clsx from 'clsx';
import { iconPaths, iconNames, type IconProps } from './config';

export const Icon = (props: IconProps) => {
  const { size = 'md', name = 'radio_checked', className } = props;

  const clxss = clsx('tbdx-icon', `tbdx-icon--size-${size}`, className);

  return (
    <svg
      id={name}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={clxss}
    >
      <path d={iconPaths[name]} fill="currentColor" />
    </svg>
  );
};

export const IconGallery = () => {
  return (
    <div className="IconGallery">
      {iconNames.map((key) => {
        return (
          <div key={key} className="IconGallery-card">
            <Icon size="xs" name={key} />
            <Icon size="sm" name={key} />
            <Icon size="md" name={key} />
            <Icon size="lg" name={key} />
            <Icon size="xl" name={key} />
          </div>
        );
      })}
    </div>
  );
};
