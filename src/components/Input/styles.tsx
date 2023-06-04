import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

type InputControlProps = {
  hasError: boolean;
};

export const InputControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`;

export const InputControl = styled.input<InputControlProps>`
  margin-top: 16px;
  padding: 12px 0 12px 20px;
  border-radius: 5px;
  height: 56px;
  width: 100%;
  border: none;
  outline: none;
  border: 1px ${COLORS.DARK_BLUE} solid;
  opacity: 0.5;
  ${({ hasError }) => (hasError ? `border: 2px red solid;` : '')}

  &::placeholder {
    color: ${COLORS.DARK_BLUE};
    font-size: 14px;
    font-weight: 600;
    line-height: 28px;
  }

  @media only screen and (min-width: 600px) {
    width: 100%;
    height: 56px;
  }
`;

export const ErrorIcon = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 30px;
  left: 230px;

  @media only screen and (min-width: 600px) {
    top: 30px;
    left: 450px;
  }
`;

export const ErrorMessage = styled.p`
  color: ${COLORS.RED};
  font-size: 13px;
  font-weight: 400;
  line-height: 13px;
  margin-left: auto;
  margin-top: 8px;

  @media only screen and (min-width: 600px) {
    margin-top: 16px;
  }
`;
