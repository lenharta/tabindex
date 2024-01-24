import { iconPaths, iconNames, type IconBaseProps, type IconProps } from './config';

const Icon = (props: IconProps & IconBaseProps) => {
  const { size = 'sm', name = 'radio_checked' } = props;
  return (
    <svg
      id={name}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`Icon Icon--${size}`}
      viewBox="0 0 24 24"
      height={24}
      width={24}
    >
      <path
        d={iconPaths[name]}
        id={[name, '_inner'].join('')}
        className="Icon-path"
        fill="currentColor"
      />
    </svg>
  );
};

export const IconGallery = () => {
  return (
    <div className="IconGallery">
      {iconNames.map((key) => {
        return (
          <div key={key} className="IconGallery-card">
            <Icon size="sm" name={key} />
            <Icon size="md" name={key} />
            <Icon size="lg" name={key} />
          </div>
        );
      })}
    </div>
  );
};
