import React from 'react';
import { TBDX } from '@/types';
import { PREFIX } from '@/config';
import * as Router from 'react-router-dom';

type SideProps = TBDX.ElementProps<'section'> & {};

type SideMenuProps = TBDX.ElementProps<'ul'> & {};

type SideLinkProps = Partial<Router.LinkProps> & {
  rootProps?: TBDX.ElementProps<'li'>;
};

const css = {
  root: `${PREFIX}-side`,
  menu: `${PREFIX}-side-menu`,
  item: `${PREFIX}-side-item`,
  link: `${PREFIX}-side-link`,
};

const SideMenu: React.FC<SideMenuProps> = (props) => {
  return <ul className={css.menu} {...props} />;
};

const SideLink: React.FC<SideLinkProps> = (props) => {
  const { to = '/', rootProps, ...linkProps } = props;
  return (
    <li className={css.item} {...rootProps}>
      <Router.Link className={css.link} to={to} {...linkProps} />
    </li>
  );
};

type SideComponents = {
  Menu: typeof SideMenu;
  Link: typeof SideLink;
};

const Side: React.FC<Omit<SideProps, 'children'>> & SideComponents = (props) => {
  const { ...otherProps } = props;
  return (
    <section className={css.root} {...otherProps}>
      <Side.Menu>
        <Side.Link to="/">Home</Side.Link>
        <Side.Link to="/guide">Guide</Side.Link>
        <Side.Link to="/proto">Proto</Side.Link>
      </Side.Menu>
    </section>
  );
};

Side.displayName = 'Side';

Side.Menu = SideMenu;
Side.Menu.displayName = 'Side.Menu';

Side.Link = SideLink;
Side.Link.displayName = 'Side.Link';

export { Side };
