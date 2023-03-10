import styled from "styled-components";
import {media} from "styles/vars";

export const Icon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({height}) => height?.sm || '25rem'};
  width: ${({width}) => width?.sm || '25rem'};
  margin: ${({margin}) => margin?.sm || null};
  color: ${({ color }) => color || 'inherit'};
  transition: color .3s;
  
  img {
    max-height: 100%;
  }
  
  @media ${media.tablet} {
    height: ${({height}) => height?.md || '30rem'};
    width: ${({width}) => width?.md  || '30rem'};
    margin: ${({margin}) => margin?.md || null};
  }
`