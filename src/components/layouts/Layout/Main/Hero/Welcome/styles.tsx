import styled from 'styled-components';

export const Container = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem 3rem;
  
  text-align: center;
  
  & * {
    color: var(--font-color-white);
  }

  & h2 {
    font-size: 4.5rem;
  }

  & p {
    font-size: 2.5rem;
  }

  & a {
    width: 16rem;
    min-height: 4rem;
    padding: 15px 8px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: var(--color-violet);
    border-radius: 20px;

    font-size: 1.4rem;

    cursor: pointer;
  
    &:hover {
      box-shadow: 0px 24px 69px -8px var(--color-violet);
    }
  }
`;