import Home from './Home';
import Menu from './Menu';

import { Container } from './styled';

const Header: React.FC = () => {
  return (
    <Container>
      <Home />
      <Menu />
    </Container>
  )
}

export default Header;