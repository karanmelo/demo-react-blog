import styled from 'styled-components';

import TechBackground from '../../../../../../assets/tech-background.jpg';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  background: url(${TechBackground}) center no-repeat;
`;