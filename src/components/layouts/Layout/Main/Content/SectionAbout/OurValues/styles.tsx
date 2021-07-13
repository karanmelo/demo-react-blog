import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 4rem 18rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: var(--background-theme);

  & h2 {
    width: 100%;

    font-size: 3rem;
    text-align: center;
  }


`;