import { Core } from '@/types';
import * as Router from 'react-router-dom';

type SideProps = Core.Props<'div'> & {};

const links = [
  {
    uid: 'side:link:home',
    value: '/',
    label: 'Home',
  },
  {
    uid: 'side:link:proto',
    value: '/proto',
    label: 'Prototype',
  },
  {
    uid: 'side:link:guide',
    value: '/guide',
    label: 'Guide',
  },
  {
    uid: 'side:link:guide:card',
    value: '/guide/card',
    label: 'Card',
  },
];

function Side(props: SideProps) {
  const { children, ...otherProps } = props;
  return (
    <div className="tbx-side" {...otherProps}>
      <ul>
        {links.map((item) => (
          <li key={item.uid}>
            <Router.Link to={item.value}>{item.label}</Router.Link>
          </li>
        ))}
      </ul>
      {children}
    </div>
  );
}

Side.displayName = 'Side';
export { Side };
