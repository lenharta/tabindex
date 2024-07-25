import { Core } from '@/types';

type SideProps = Core.Props<'div'> & {};

function Side(props: SideProps) {
  const { children, ...otherProps } = props;
  return (
    <div className="tbx-side" {...otherProps}>
      {children}
    </div>
  );
}

Side.displayName = 'Side';
export { Side };
