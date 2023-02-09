import styled from "styled-components";
import {colors, media} from "styles/vars";
import {LinkHovered} from 'styles/globalStyles'

const fontSizeStandart = styled.div`
  font-size: 15rem;
  line-height: 17rem;
  
  @media ${media.tablet} {
    font-size: 16rem;
    line-height: 19rem;
  }
`

export const Root = styled.footer``

export const Wrapper = styled.div`
  padding: 20rem 15rem 10rem;
  background-color: ${colors.mainColor};
  border-radius: 16rem 16rem 0 0;
  
  @media ${media.tablet} {
    padding: 37rem 23rem 13rem;
  }
`

export const Row = styled.div`
  @media ${media.tablet} {
    display: flex;
  }
`

export const Nav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15rem;
  
  @media ${media.tabletS} {
    flex: 1;
    flex-direction: row;
  }
`

export const NavItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const NavTitle = styled.div`
  font-weight: 700;
  color: ${colors.gray100};
  
  @media ${media.tablet} {
    font-size: 20rem;
    line-height: 24rem;
    margin-bottom: 23rem;
  }
`

export const NavLink = styled(fontSizeStandart)`
  display: inline-flex;
  align-items: center;
  color: ${colors.white100};
  
  &:hover {
    color: ${colors.blue};
  }
  
  &:not(:last-child) {
    margin-bottom: 5rem;
  }
`

export const NavLinkIcon = styled.div`
  color: ${colors.blue};
  margin-right: 7rem;
`

export const NavLinkText = styled(LinkHovered)`
  &::after {
    background-color: rgba(255, 255, 255, 0.4);
  }
`

export const Content = styled.div`
  margin: 20rem 0 0;
  
  @media ${media.tablet} {
    width: 464rem;
    margin: 0;
  }
`

export const SubscribeText = styled(fontSizeStandart)`
  font-weight: 700;
  color: ${colors.gray100};
  margin-bottom: 21rem;
`

export const CopyRight = styled(fontSizeStandart)`
  color: ${colors.gray90};
  text-align: center;
  margin-top: 28rem;
`