import {Container} from "components/elements/Container";
import {SliderButton} from "components/modules/Slider/SliderButton";
import {LiveButton} from "components/elements/LiveButton";
import {Slider} from "components/modules/Slider";
import {SwiperSlide} from "swiper/react";
import {WIDGETS_DATA} from 'constans/WIDGETS_DATA';

import * as css from './CategoriesWidget.css';

const CategoriesWidget = () => {
    return (
        <css.Section>
            <Container>
                <css.Header>
                    <css.HeaderLeft>
                        <css.Title>Categories</css.Title>
                        <css.Navigation>
                            <SliderButton className="categoriesPrev prev" />
                            <SliderButton className="categoriesNext next" />
                        </css.Navigation>
                    </css.HeaderLeft>
                    <LiveButton />
                </css.Header>
                <Slider
                    slidesPerView={2}
                    spaceBetween={20}
                    navigation={{
                        nextEl: '.categoriesNext',
                        prevEl: '.categoriesPrev',
                    }}
                    breakpoints={{
                        768.98: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                        992: {
                            slidesPerView: 6,
                            spaceBetween: 42,
                        }
                    }}
                >
                    {
                        WIDGETS_DATA.categories.map((item) => {
                            return (
                                <SwiperSlide key={item.id}>
                                    <css.SlideWrapper as="a" href="#">
                                        <css.SliderImgWrapper>
                                            <css.SliderImg src={item.img} />
                                        </css.SliderImgWrapper>
                                        <css.SliderTitle>{item.title}</css.SliderTitle>
                                    </css.SlideWrapper>
                                </SwiperSlide>
                            )
                        })
                    }
                </Slider>
            </Container>
        </css.Section>
    );
}

export default CategoriesWidget;