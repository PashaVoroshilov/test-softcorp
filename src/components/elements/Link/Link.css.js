import styled from "styled-components";
import {colors, media} from "styles/vars";

export const Link = styled.link`
  position: relative;
  font-size: ${({fontSize}) => fontSize?.sm || '16rem'};
  line-height: ${({lineHeight}) => lineHeight?.sm || '19rem'};
  color: ${({color}) => color || colors.mainColor};

  &::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${({colorAfter}) => colorAfter || 'rgba(72, 89, 240, 0.3)'};
    transition: width .3s;
  }

  &:hover::after {
    width: 0;
  }
  
  @media ${media.tablet} {
    font-size: ${({fontSize}) => fontSize?.md || '16rem'};
    line-height: ${({lineHeight}) => lineHeight?.md || '19rem'};
  }
`