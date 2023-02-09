import styled from "styled-components";
import {media} from "styles/vars";

export const Root = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ width }) => width || '25rem'};
  height: ${({ height }) => height || '25rem'};
  color: ${({ color }) => color};
  
  @media ${media.tablet} {
    width: ${({ width }) => width || '30rem'};
    height: ${({ height }) => height || '30rem'};
    color: ${({ color }) => color};
  }
`