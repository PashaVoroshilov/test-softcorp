import styled from "styled-components";
import {media} from "styles/vars";

export const Root = styled.main`
  flex: 1;
  padding-bottom: 20rem;
  
  @media ${media.tablet} {
    padding-bottom: 40rem;
  }
`
