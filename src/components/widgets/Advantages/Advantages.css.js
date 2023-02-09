import styled from "styled-components";
import {colors, media} from "styles/vars";

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Section = styled.section`
  margin-top: 40rem;
  
  @media ${media.tablet} {
    margin-top: 107rem;
  }
`

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20rem;
  
  @media ${media.tablet} {
    flex-direction: row;
    justify-content: space-between;
    gap: 0;
  }
`

export const Item = styled(Flex)``

export const IconWrapper = styled(Flex)`
  width: 60rem;
  height: 60rem;
  color: ${colors.blue};
  margin-bottom: 15rem;
  
  @media ${media.tablet} {
    width: 80rem;
    height: 80rem;
    margin-bottom: 23rem;
  }
`

export const Title = styled(Flex)`
  font-weight: 700;
  font-size: 18rem;
  line-height: 24rem;
  
  @media ${media.tablet} {
    font-size: 25rem;
    line-height: 30rem;
  }
`