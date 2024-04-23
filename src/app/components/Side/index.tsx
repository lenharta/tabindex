import React from 'react';
import { SideMenu } from './Menu';
import { SideFooter } from './Footer';

interface SideProps {}

type SideComponent = React.FC<SideProps> & {
  Menu: typeof SideMenu;
  Footer: typeof SideFooter;
};

export const Side: SideComponent = () => {
  return (
    <div className="side">
      <div className="side-container">
        <Side.Menu />
        <Side.Footer />
      </div>
    </div>
  );
};

Side.Menu = SideMenu;
Side.Footer = SideFooter;
Side.displayName = 'app/Side';
