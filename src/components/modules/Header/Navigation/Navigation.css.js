import styled from "styled-components";
import {LinkHovered} from 'styles/globalStyles'
import {media} from "styles/vars";

export const Root = styled.nav`
  margin-bottom: 20rem;

  @media ${media.tablet} {
    margin-bottom: 0;
  }
`

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 15rem;
  align-items: center;
  
  @media ${media.tablet} {
    display: flex;
    align-items: center;
    flex-direction: row;
    column-gap: 25rem;
  }
`

export const Item = styled.li``

export const Title = styled(LinkHovered)`
  font-size: 19rem;
  line-height: 24rem;
  
  &::after {
    background-color: rgba(155, 149, 145, 0.5);
  }

  @media ${media.tablet} {
    font-size: 22rem;
    line-height: 27rem;
  }
`
