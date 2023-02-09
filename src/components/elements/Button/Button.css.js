import styled from "styled-components";
import {colors, media} from "styles/vars";

export const Root = styled.link`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({height: {sm}}) => sm};
  width: ${({width: {sm}}) => sm};
  font-weight: 700;
  font-size: ${({fontSize: {sm}}) => sm};
  color: ${({color}) => color || colors.white100};
  background-color: ${({backgroundColor}) => backgroundColor || colors.blue};
  border-radius: ${({borderRadius}) => borderRadius || '16rem'};

  @media ${media.tablet} {
    height: ${({height: {md}}) => md};
    width: ${({width: {md}}) => md};
    font-size: ${({fontSize: {md}}) => md};
  }
`