export interface MenuProps {}

export type MenuComponent = React.FC<MenuProps>;

const MenuItem = () => {
  return (
    <li className="wf-menu-link">
      <span className="inner">
        <div className="wf-menu-icon" />
        <div className="wf-menu-label" />
      </span>
    </li>
  );
};

export const Menu: MenuComponent = () => {
  return (
    <div className="Menu">
      <div className="wf-menu-logo" />
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
    </div>
  );
};

Menu.displayName = 'app/Menu';
