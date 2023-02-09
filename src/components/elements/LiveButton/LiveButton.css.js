import styled from "styled-components";
import {colors, media} from "styles/vars";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 30rem;
  padding: 0 15rem;
  background-color: ${colors.blue};
  box-shadow: 0 4rem 11rem rgba(33, 33, 33, 0.35);
  border-radius: 25rem;
  
  @media ${media.tablet} {
    height: 50rem;
    width: 181rem;
    padding: 0 24rem;
  }
`

export const Text = styled.div`
  font-weight: 700;
  font-size: 16rem;
  color: ${colors.white100};
`