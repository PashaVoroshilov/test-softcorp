import styled from "styled-components";
import {media} from "styles/vars";

export const Main = styled.main`
  flex: 1;
  padding-bottom: 30rem;
  
  @media ${media.tablet} {
    padding-bottom: 112rem;
  }
`
