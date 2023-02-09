import styled from "styled-components";
import {LinkHovered} from "styles/globalStyles";
import {colors} from "styles/vars";

export const Root = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 7rem;
`

export const List = styled.ul`
  display: flex;
  align-items: center;
  column-gap: 20rem;
`

export const Item = styled.li``

export const Link = styled(LinkHovered)`
  font-size: 16rem;
  line-height: 19rem;
  color: ${colors.blue};
`
