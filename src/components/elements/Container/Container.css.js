import styled from "styled-components";
import {media, vars} from "styles/vars";

export const Root = styled.div`
  max-width: ${vars.containerWidth};
  padding: 0 ${vars.containerPaddingMobile};
  margin: 0 auto;
  
  @media ${media.tablet} {
    padding: 0 ${vars.containerPadding};
  }
`
