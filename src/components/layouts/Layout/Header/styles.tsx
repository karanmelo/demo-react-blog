import styled from 'styled-components';

import { mediaQueries } from '../../../../styles/mediaQueries';

export const Container = styled.div`
  position: fixed;
  width: 100%;
  min-height: 6.5rem;
  padding: 0 2rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: ${(props) => props.theme.colors.body};
  box-shadow: 0px 0px 13px -6px black;

  ${mediaQueries('sm')`
    padding: 0 8rem;
  `};

  ${mediaQueries('md')`
    padding: 0 10%;
  `};

  ${mediaQueries('lg')`
    padding: 0 20%;
  `};
`;