import { ChangeEvent } from 'react';
import {
  InputControlContainer,
  InputControl,
  ErrorIcon,
  ErrorMessage,
} from './styles';

type InputControlState = {
  value: string;
  error: boolean;
};

type InputProps = {
  type: string;
  inputControlState: InputControlState;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ type, inputControlState, name, onChange }: InputProps) => {
  return (
    <InputControlContainer>
      <InputControl
        type={type}
        hasError={inputControlState.error}
        placeholder={name}
        value={inputControlState.value}
        onChange={onChange}
      />
      {inputControlState.error && (
        <>
          <ErrorIcon src="assets/images/icon-error.svg" />
          <ErrorMessage>{`${name} cannot be empty.`}</ErrorMessage>
        </>
      )}
    </InputControlContainer>
  );
};

export default Input;
