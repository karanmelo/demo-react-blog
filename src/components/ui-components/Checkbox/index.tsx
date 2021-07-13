import React, { KeyboardEvent, useRef, } from 'react';

import {
  Container,
  LabelSwitch,
  Input,
  Label,
  Slider
} from './styles';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  label?: string;
  title?: string;
  checked?: boolean;
  onChange?: any;
}

const Checkbox: React.FC<CheckboxProps> = ({ id, label, checked, onChange, title }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleKeyPressed(event: KeyboardEvent<HTMLLabelElement>) {
    if (inputRef.current !== null && event.code === 'Enter') {
      inputRef.current.click();
    }
  }

  return (
    <Container>
      <LabelSwitch htmlFor={id} tabIndex={0} onKeyPress={handleKeyPressed}>
        <Input ref={inputRef} type="checkbox" id={id} checked={checked} onChange={onChange} />
        <Slider title={title} />
      </LabelSwitch>
      <Label>{label}</Label>
    </Container>
  );
}

export default Checkbox;