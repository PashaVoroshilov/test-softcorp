import styled from "styled-components";
import {colors, media} from "styles/vars";

export const Flex = styled.div`
  display: flex;
  align-items: center;
`

export const Root = styled.section`
  margin-top: 40rem;
  
  @media ${media.tablet} {
    margin-top: 71rem;
  }
`

export const Header = styled(Flex)`
  flex: 1;
  justify-content: space-between;
  margin-bottom: 13rem;
`

export const HeaderLeft = styled(Flex)`
  gap: 15rem;
  
  @media ${media.tablet} {
    gap: 43rem;
  }
`

export const Title = styled.h2`
  font-weight: 700;
  font-size: 21rem;
  line-height: 24rem;

  @media ${media.tablet} {
    font-size: 25rem;
    line-height: 30rem;
  }
`

export const Navigation = styled(Flex)`
  gap: 10rem;
`

export const SliderImgWrapper = styled.div`
  position: relative;
  padding-top: 100%;
  border: 1px solid ${colors.gray70};
  border-radius: 8rem;
  margin-bottom: 14rem;
  overflow: hidden;
`

export const SlideWrapper = styled.link`
  display: block;
`

export const SliderImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const SliderTitle = styled.div`
  font-weight: 700;
  font-size: 16rem;
  line-height: 19rem;
`