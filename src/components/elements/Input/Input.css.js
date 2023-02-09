import styled from "styled-components";
import {colors} from "styles/vars";

export const Root = styled.input`
  display: block;
  width: 100%;
  font-family: "Inter", sans-serif;
  height: ${({ inputHeight }) => inputHeight.lg || '45rem' };
  font-size: ${({ fontSize }) => fontSize || '16rem' };
  line-height: 1;
  color: ${({ color }) => color || colors.mainColor };
  padding: ${({ padding }) => padding || "0 10rem" };
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
`