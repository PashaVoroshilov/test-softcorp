import styled from "styled-components";
import {LinkHovered} from "styles/globalStyles";
import {colors, media, vars} from "styles/vars";

export const Flex = styled.div`
  display: flex;
  align-items: center;
`

export const Root = styled(Flex)`
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
  gap: 9rem;
  margin-top: 20rem;
  
  @media ${media.tablet} {
    margin-top: initial;
  }
`

export const PhoneText = styled(LinkHovered)`
  font-size: 18rem;
  line-height: 24rem;
  color: ${colors.blue};

  @media ${media.tablet} {
    font-size: 22rem;
    line-height: 27rem;
  }
`

export const Burger = styled.button`
  display: block;
  color: ${colors.black};
`

export const SearchTrigger = styled.button`
  display: block;
  color: ${colors.black};
`
