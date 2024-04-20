export interface SkipToProps {}

export type SkipToComponent = React.FC<SkipToProps>;

export const SkipTo: SkipToComponent = () => {
  return (
    <div className="SkipTo">
      <span>Skip To Main</span>
    </div>
  );
};

SkipTo.displayName = 'app/SkipTo';
