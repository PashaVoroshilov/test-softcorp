import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import SwiperCore, {
    Autoplay, FreeMode, Mousewheel, Navigation, Pagination, Scrollbar, Thumbs,
} from 'swiper'
import { Swiper } from 'swiper/react'

SwiperCore.use([Navigation, FreeMode, Pagination, Autoplay, Scrollbar, Mousewheel, Thumbs])

const Slider = ({
        slidesPerView,
        spaceBetween,
        onChange,
        loop,
        children,
        className,
        breakpoints,
        navigation,
        pagination,
        autoplay,
        centeredSlides,
        scrollbar,
        free,
        loopedSlides,
        noSwiping,
        slidesPerGroup,
        nested,
        initialSlide,
        thumbs,
        onSwiper,
        direction,
        autoHeight,
        watchOverflow,
        cssMode,
    }) => {
    return (
        <Swiper
            slidesPerView={slidesPerView}
            spaceBetween={spaceBetween}
            onSlideChange={onChange}
            watchOverflow={watchOverflow}
            pagination={pagination ? {
                ...pagination,
                clickable: true,
            } : false}
            scrollbar={scrollbar}
            loop={loop}
            navigation={navigation}
            className={className}
            breakpoints={breakpoints}
            autoplay={autoplay}
            centeredSlides={centeredSlides}
            freeMode={free}
            loopedSlides={loopedSlides}
            updateOnWindowResize={false}
            noSwiping={noSwiping}
            id={className}
            slidesPerGroup={slidesPerGroup}
            nested={nested}
            initialSlide={initialSlide}
            mousewheel={{
                forceToAxis: true,
            }}
            thumbs={thumbs}
            onSwiper={onSwiper}
            direction={direction}
            threshold={5}
            autoHeight={autoHeight}
            cssMode={cssMode}
        >
            {children}
        </Swiper>
    )
}

Slider.defaultProps = {
    slidesPerView: 1,
    spaceBetween: 0,
    slidesPerGroup: 1,
    loop: false,
    onChange: () => {
    },
    className: '',
    breakpoints: {},
    navigation: false,
    pagination: false,
    autoplay: false,
    centeredSlides: false,
    scrollbar: false,
    loopedSlides: 0,
    noSwiping: true,
    nested: false,
    initialSlide: 0,
    thumbs: {},
    onSwiper: null,
    direction: 'horizontal',
    autoHeight: false,
    watchOverflow: true,
    cssMode: false,
}

export default Slider
