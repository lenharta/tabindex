import React from 'react';

interface SideMenuProps {}

export const SideMenu: React.FC<SideMenuProps> = () => {
  return (
    <div className="side-menu">
      <span>Side.Menu</span>
    </div>
  );
};

SideMenu.displayName = 'app/Side.Menu';
