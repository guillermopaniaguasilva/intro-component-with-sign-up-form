import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

export const Form = styled.form`
  width: 327px;
  min-height: 442px;
  background-color: ${COLORS.WHITE};
  border-radius: 10px;
  box-shadow: 0px 8px 0px rgba(0, 0, 0, 0.14688);
  margin-bottom: 68px;
  padding: 0 24px;
`;

export const SubmitButton = styled.button`
  width: 100%;
  background: ${COLORS.GREEN};
  box-shadow: inset 0px -4px 0px rgba(0, 0, 0, 0.0908818);
  border-radius: 5px;
  border: none;
  padding: 15px 43px;
  margin-top: 20px;
  color: ${COLORS.WHITE};
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 600;
  line-height: 26px;
  letter-spacing: 1px;
`;

export const AcceptPolicyText = styled.p`
  margin: 8px 15px 24px 15px;
  font-size: 11px;
  font-weight: 500;
  line-height: 21px;
  color: ${COLORS.GRAYISH_BLUE};
  text-align: center;
`;

export const PolicyLink = styled.a`
  font-size: 11px;
  font-weight: 700;
  line-height: 21px;
  color: ${COLORS.RED};
`;
