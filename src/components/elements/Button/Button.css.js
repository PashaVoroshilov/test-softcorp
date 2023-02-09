import styled from "styled-components";
import {colors, media} from "styles/vars";

export const Button = styled.link`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({height}) => height?.sm || '45rem'};
  width: ${({width}) => width?.sm || 'auto'};
  font-weight: 700;
  font-size: ${({fontSize}) => fontSize?.sm || '20rem'};
  color: ${({color}) => color || colors.white100};
  background-color: ${({backgroundColor}) => backgroundColor || colors.blue};
  border-radius: ${({borderRadius}) => borderRadius || '16rem'};
  transition: color .3s, background-color .3s;
  
  &:hover {
    color: ${colors.mainColor};
    background-color: ${colors.white90};
  }

  @media ${media.tablet} {
    height: ${({height}) => height?.md || '65rem'};
    width: ${({width}) => width?.md || '320rem'};
    font-size: ${({fontSize}) =>fontSize?.md || '22rem'}
  }
`