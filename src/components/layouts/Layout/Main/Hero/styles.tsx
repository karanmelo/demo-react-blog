import styled from 'styled-components';

import HeroBackground from '../../../../../assets/hero-background.jpg';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background: url(${HeroBackground}) center no-repeat;
  background-size: cover;
`;

