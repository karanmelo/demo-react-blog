import styled from 'styled-components';

export const NavMenu = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.6em;
`;

export const NavItem = styled.li`
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 300;
  opacity: .8;

  transition: .2s linear all;

  &:hover {
    border-bottom: 4px solid var(--color-violet);
  }
`;

export const NavItemButton = styled.li`
  width: 8rem;
  height: 4rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--color-violet);
  border-radius: 20px;

  font-size: 1.4rem;
  font-style: normal;

  cursor: pointer;

  transition: .2s linear all; 

  & a {
    color: var(--font-color-white);
  }

  &:hover {
    box-shadow: 2px 2px 8px -4px black;
  }
`;