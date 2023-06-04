import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

export const DesktopContainer = styled.div``

export const Heading = styled.h1`
  color: ${COLORS.WHITE};
  font-size: 28px;
  font-weight: 700;
  line-height: 36px;
  text-align: center;
  margin: 88px 24px 0 24px;
`;

export const Description = styled.p`
  color: ${COLORS.WHITE};
  font-size: 16px;
  font-weight: 500;
  line-height: 26px;
  text-align: center;
  margin: 16px 24px 0 24px;
`;

export const Card = styled.div`
  background-color: ${COLORS.BLUE};
  width: 327px;
  height: 88px;
  align-self: center;
  margin: 64px 24px 24px 24px;
  border-radius: 10px;
  padding: 18px 66px;
  box-shadow: 0px 8px 0px rgba(0, 0, 0, 0.14688);

  @media only screen and (min-width: 600px) {
    margin-left: 0;
    min-width: 540px;
  }
`;

export const CardText = styled.p`
  color: ${COLORS.WHITE};
  font-size: 15px;
  font-weight: 400;
  line-height: 26px;
  text-align: center;
`;

export const Bold = styled.span`
  font-weight: 700;
`;
