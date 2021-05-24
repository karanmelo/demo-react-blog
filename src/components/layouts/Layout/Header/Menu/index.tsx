import ThemeControl from '../ThemeControl';

import { NavMenu, NavItem, NavItemButton } from './styles';

const Menu: React.FC = () => {
  return (
    <NavMenu>
      <NavItem><a href="/">HOME</a></NavItem>
      <NavItem><a href="/">BLOG</a></NavItem>
      <NavItem><a href="/">CONTACT</a></NavItem>
      <NavItemButton><a href="/">MORE</a></NavItemButton>
      <ThemeControl />
    </NavMenu>
  );
}

export default Menu;