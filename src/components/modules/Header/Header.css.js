import styled from "styled-components";
import {media, vars} from "styles/vars";

export const Flex = styled.div`
  display: flex;
  align-items: center;
`

export const Header = styled(Flex)`
  justify-content: space-between;
  padding: 20rem ${vars.containerPaddingMobile};
  
  @media ${media.tablet} {
    display: block;
    padding: 12rem 0 21rem;
  }
`

export const Logo = styled.img`
  max-width: 75rem;

  @media ${media.tabletS} {
    max-width: 106rem;
    margin-right: 58rem;
  }
`

export const Bottom = styled(Flex)`
  justify-content: space-between;
  margin-top: 26rem;
`

export const Phone = styled(Flex)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9rem;
  margin-top: 20rem;
  
  @media ${media.tablet} {
    margin-top: initial;
    justify-content: stretch;
  }
`

export const Burger = styled.button`
  display: block;
`

export const SearchTrigger = styled.button`
  display: block;
`
