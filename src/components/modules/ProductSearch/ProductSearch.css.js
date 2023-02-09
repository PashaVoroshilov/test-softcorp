import styled from "styled-components";
import {media} from "styles/vars";

export const Wrapper = styled.div`
  position: relative;
  
  @media ${media.tablet} {
    width: 479rem;
  }
`

export const IconWrapper = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 14rem;
`