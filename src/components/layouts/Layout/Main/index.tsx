import Hero from './Hero';
import Content from './Content';

import { Container } from './styled';

const Main: React.FC = () => {
  return (
    <Container>
      <Hero />
      <Content />
    </Container>
  )
}

export default Main;