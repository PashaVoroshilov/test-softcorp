import styled from "styled-components";
import {colors, media, vars} from "styles/vars";

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${colors.white100};
  padding: 0 ${vars.containerPaddingMobile} 20rem;
  z-index: 10;
  overflow: hidden auto;
  
  @media ${media.tablet} {
    padding: 0 ${vars.containerPadding} 20rem;
  }
`

export const Header = styled.div`
  padding: 15rem 0;
`

export const Close = styled.button``

export const Wrapper = styled.div`
  flex: 1;
`