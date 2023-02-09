import styled from "styled-components";
import {media} from "styles/vars";

export const Navigation = styled.nav`
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
