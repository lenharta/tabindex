export interface MenuProps {}

export type MenuComponent = React.FC<MenuProps>;

export const Menu: MenuComponent = () => {
  return (
    <div className="Menu">
      <span>Menu</span>
    </div>
  );
};

Menu.displayName = 'app/Menu';
