import styled from "styled-components";
import {colors, media} from "styles/vars";

export const Section = styled.section`
  margin-top: 40rem;
  
  @media ${media.tablet} {
    margin-top: 101rem;
  }
`

export const Wrapper = styled.div`
  background: url(${({backgroundImage}) => backgroundImage}) center/cover no-repeat;
  padding: 20rem 25rem 30rem;
  border: 1px solid ${colors.gray70};
  border-radius: 16rem;
  
  @media ${media.tabletS} {
    display: flex;
    align-items: flex-end;
    min-height: 400rem;
    padding: 20rem 45rem 100rem;
    overflow: hidden;
  }
  
  @media ${media.tablet} {
    min-height: 684rem;
    padding: 20rem 75rem 141rem;
  }
`

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20rem;
  
  @media ${media.tabletS} {
    max-width: 430rem;
  }
  
  @media ${media.tablet} {
    max-width: 600rem;
    gap: 40rem;
  }
`

export const Title = styled.h2`
  font-weight: 700;
  font-size: 20rem;
  line-height: 24rem;
  
  @media ${media.tablet} {
    font-size: 35rem;
    line-height: 42rem;
  }
`

export const Text = styled.div`
  font-size: 18rem;
  line-height: 22rem;
  
  @media ${media.tablet} {
    min-height: 183rem;
    font-size: 22rem;
    line-height: 27rem;
    padding-right: 55rem;
  }
`