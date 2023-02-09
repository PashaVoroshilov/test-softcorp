import styled from "styled-components";
import {colors, media} from "styles/vars";

export const Root = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30rem;
  height: 30rem;
  background-color: ${colors.white90};
  border-radius: 50%;
  
  & > span {
    margin-right: 5rem;
  }
  
  &.next {
    transform: rotate(180deg);
  }
  
  @media ${media.tablet} {
    width: 46rem;
    height: 46rem;
  }
`