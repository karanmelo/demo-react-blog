import styled from 'styled-components';

import Lua from '../../../../../../assets/lua.png';
import Sol from '../../../../../../assets/sol.png';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: left;
`;

export const LabelSwitch = styled.label`
  position: relative;
  min-width: 8rem;;
  min-height: 4rem;
  
  display: inline-block;

  & input {
    display: none;
  }
`;

export const Input = styled.input`
  &:checked + div {
    background: rgba(9,117,121,1);
    background: linear-gradient(0deg, rgba(9,117,121,1) 0%, rgba(0,212,255,1) 77%);
  }

  &:checked + div:before {
    left: -1.8rem;

    background: url(${Sol}) 0% 0% no-repeat padding-box;
    background-size: 3rem;
    transform: translateX(2.6rem);
  }
`;

type SliderProps = {
  checked: boolean;
}

export const Slider = styled.div<SliderProps>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(9,9,121,1);
  background: linear-gradient(0deg,rgba(9,9,121,1) 0%,rgba(2,0,36,1) 100%);
  border-radius: 2.3rem;
  cursor: pointer;
  transition: .4s;

  &:before {
    position: absolute;
    width: 3.5rem;
    height: 3.5rem;
    top: .5rem;
    left: 3.9rem;

    content: "";
    background: url(${Lua}) 0% 0% no-repeat padding-box;
    background-size: 3rem;
    transition: .4s;
  }
`;