import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
import { ITextInputProps } from '@interfaces';

const StyledTextInput = styled.textarea`
  border: none;
  outline: none;
  resize: none;
  pointer-events: auto;
`;

function TextInput(textAreaProperty: ITextInputProps): ReactElement {
  const [text, setText] = useState('');
  const { placeholder, onChange, onFocus, onBlur, onKeyDown, className } = textAreaProperty;

  return (
    <StyledTextInput
      className={className}
      placeholder={placeholder}
      spellCheck="false"
      value={text}
      onChange={(event) => {
        if (onChange) {
          onChange(event, setText);
          return;
        }
        setText(event.target.value);
      }}
      onFocus={() => {
        if (!onFocus) return;
        onFocus();
      }}
      onBlur={() => {
        if (!onBlur) return;
        onBlur();
      }}
      onKeyDown={(event) => {
        if (!onKeyDown) return;
        onKeyDown(event, setText, text);
      }}
    />
  );
}

export default TextInput;
