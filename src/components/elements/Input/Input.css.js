import styled from "styled-components";
import {colors, media} from "styles/vars";

export const Input = styled.input`
  display: block;
  width: 100%;
  font-family: "Inter", sans-serif;
  height: ${({ height }) => height?.sm || '45rem' };
  font-size: ${({ fontSize }) => fontSize?.sm || '16rem' };
  line-height: 1;
  color: ${({ color }) => color || colors.mainColor };
  padding: ${({ padding }) => padding?.sm || "0 10rem" };
  background-color: ${({ backgroundColor }) => backgroundColor || colors.white90 };
  border-radius: ${({ borderRadius }) => borderRadius || '8rem' };
  border: 1px solid transparent;
  transition: border-color .3s;
  
  &::placeholder {
    color: ${colors.gray90};
  }
  
  &:focus {
    border: 1px solid ${colors.blue};
  }
  
  @media ${media.tablet} {
    height: ${({ height }) => height?.md || '40rem' };
    font-size: ${({ fontSize }) => fontSize?.md || '16rem' };
    padding: ${({ padding }) => padding?.md || "0 10rem" };
  }
`