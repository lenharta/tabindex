// import { Logo } from '../Logo';
// import { useNavigate } from 'react-router-dom';

// const menuLinkData = [
//   { id: 'menu-nav-item-1', label: 'Learn', value: '/learn' },
//   { id: 'menu-nav-item-2', label: 'Guides', value: '/guides' },
//   { id: 'menu-nav-item-3', label: 'Anatomy', value: '/anatomy' },
// ];

// const SideLogo: React.FC<{}> = ({}) => {
//   return <div className="Menu-logo" children={<Logo />} />;
// };

// const SideMenu: React.FC<{}> = ({}) => {
//   const navigate = useNavigate();
//   return (
//     <div className="side-menu" role="menu">
//       {menuLinkData.map((item) => (
//         <li
//           id={item.id}
//           role="menuitem"
//           value={item.value}
//           children={item.label}
//           className="menu-nav-item"
//           onClick={(event) => {
//             event.stopPropagation();
//             navigate(event.currentTarget.value);
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// export interface menuProps {}

// export type menuComponent = React.FC<menuProps> & {
//   Menu: typeof SideMenu;
//   Logo: typeof SideLogo;
// };

// export const Menu: MenuComponent = () => {
//   return (
//     <div className="Menu">
//       <Menu.Logo />
//     </div>
//   );
// };

// Menu.Nav = MenuNav;
// Menu.Logo = SideLogo;

// Menu.displayName = 'app/Menu';
// Menu.Logo.displayName = 'app/Menu.Logo';
