import styled from "styled-components";
import {colors, media} from "styles/vars";

export const Section = styled.section``

export const SliderRoot = styled.div`
  border-radius: 16rem;
  overflow: hidden;
  
  .swiper-pagination {
    padding: 0 20rem;
    bottom: 21rem;
    
    @media ${media.tablet} {
      text-align: right;
    }
  }

  .swiper-pagination-bullet {
    width: 8rem;
    height: 8rem;
    background-color: ${colors.white100};
    opacity: .6;
    margin: 0 4rem;
    transition: width .3s, opacity .3s, border-radius .3s;
    
    &.swiper-pagination-bullet-active {
      width: 26rem;
      border-radius: 4rem;
      opacity: 1;
    }
  }
`

export const Item = styled.div`
  padding: 20rem 20rem 50rem;
  background: url(${({ backgroundImage }) => backgroundImage}) center/cover no-repeat;

  @media ${media.tabletS} {
    min-height: 250rem;
  }
  
  @media ${media.tablet} {
    display: flex;
    align-items: flex-end;
    min-height: 675rem;
    padding: 84rem 96rem;
  }
`

export const Wrapper = styled.div`
  @media ${media.tabletS} {
    max-width: 365rem;
  }
  @media ${media.tablet} {
    max-width: 585rem;
  }
`

export const Title = styled.div`
  font-weight: 700;
  font-size: 25rem;
  line-height: 33rem;
  letter-spacing: 0.01em;
  color: ${colors.white100};
  margin-bottom: 20rem;
  
  @media ${media.tablet} {
    min-height: 228rem;
    font-size: 46rem;
    line-height: 56rem;
    margin-bottom: 54rem;
  }
`