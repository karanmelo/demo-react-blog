import OurValues from './OurValues';
import About from './About';

import { Container } from './styles';

const SectionAbout: React.FC = () => (
  <Container>
    <OurValues />
    <About />
  </Container>
);

export default SectionAbout;