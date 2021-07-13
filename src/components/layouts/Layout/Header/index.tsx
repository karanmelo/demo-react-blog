import Home from './Home';
import Menu from './Menu';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Home />
      <Menu />
    </Container>
  )
}

export default Header;