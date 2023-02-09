import {Slider} from "components/modules/Slider";
import {SwiperSlide} from "swiper/react";
import {Button} from "components/elements/Button";
import Banner from 'assets/images/Banner-1.jpg';
import {Container} from "components/elements/Container";
import {WIDGETS_DATA} from 'constans/WIDGETS_DATA'

import * as css from './BannerSlider.css';

const BannerSlider = () => {
    return (
        <Container>
            <css.Root>
                <Slider
                    spaceBetween={10}
                    pagination
                    autoHeight
                >
                    {
                        WIDGETS_DATA.greet.map((item, index) => (
                            <SwiperSlide key={index}>
                                <css.Item backgroundImage={Banner}>
                                    <css.Wrapper>
                                        <css.Title>
                                            {item.title}
                                        </css.Title>
                                        <Button
                                            to="#"
                                            title="Shop Now"
                                            height={{ md: '65rem', sm: '45rem' }}
                                            width={{ md: '320rem', sm: 'auto' }}
                                            fontSize={{ md: '22rem', sm: '20rem' }}
                                        />
                                    </css.Wrapper>
                                </css.Item>
                            </SwiperSlide>
                        ))
                    }
                </Slider>
            </css.Root>
        </Container>
    );
}

export default BannerSlider;