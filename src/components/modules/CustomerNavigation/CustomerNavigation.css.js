import styled from "styled-components";
import {colors, media} from "styles/vars";

export const Root = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 15rem;
  
  @media ${media.tablet} {
    align-items: center;
    gap: 23rem;
    flex-wrap: nowrap;
    margin-left: auto;
  }
`

export const Item = styled.link`
  display: flex;
  align-items: center;
  width: calc(50% - 8rem);
  
  @media ${media.tablet} {
    width: initial;
  }
`

export const Icon = styled.div`
  color: ${colors.gray90};
  margin-right: 9rem;
  transition: color .3s;

  ${Item}:hover & {
    color: ${colors.blue};
  }
`

export const Title = styled.div`
  font-size: 16rem;
  line-height: 19rem;
  transition: color .3s;
  
  ${Item}:hover & {
    color: ${colors.blue};
  }
`