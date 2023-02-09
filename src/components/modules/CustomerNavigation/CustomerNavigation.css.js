import styled from "styled-components";
import {colors, media} from "styles/vars";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30rem;
  
  @media ${media.tabletS} {
    gap: 23rem;
    margin-left: auto;
  }
`

export const Item = styled.link`
  display: flex;
  align-items: center;
  color: ${colors.gray90};

  &:hover {
    color: ${colors.blue};
  }
`

export const Title = styled.div`
  font-size: 16rem;
  line-height: 19rem;
  color: ${colors.mainColor};
  transition: color .3s;
  
  ${Item}:hover & {
    color: ${colors.blue};
  }
`