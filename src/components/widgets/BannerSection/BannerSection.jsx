import {Container} from "components/elements/Container";
import {WIDGETS_DATA} from 'constans/WIDGETS_DATA';
import {Button} from "components/elements/Button";
import Banner from 'assets/images/Banner-2.jpg'

import * as css from './BannerSection.css';

const BannerSection = () => {
    return (
        <css.Root>
            <Container>
                <css.Wrapper backgroundImage={Banner}>
                    <css.Block>
                        <css.Title>{WIDGETS_DATA.bannerSection.title}</css.Title>
                        <css.Text>{WIDGETS_DATA.bannerSection.text}</css.Text>
                        <Button title="Shop Now" to="#" />
                    </css.Block>
                </css.Wrapper>
            </Container>
        </css.Root>
    );
}

export default BannerSection;