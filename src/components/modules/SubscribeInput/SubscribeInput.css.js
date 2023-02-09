import styled from "styled-components";
import {Button} from "components/elements/Button/Button.css"

export const Wrapper = styled.div`
  position: relative;
  
  ${Button} {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 3rem;
  }
`