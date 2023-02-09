import {Container} from "components/elements/Container";
import {Icon} from "components/elements/Icon";
import {ProductsCartIcon, SupportIcon} from 'assets/icons'
import IdeaIcon from 'assets/icons/idea.png'
import {colors} from "styles/vars";

import * as css from './Advantages.css';

const Advantages = () => {
    return (
        <css.Section>
            <Container maxWidth="1080rem">
                <css.List>
                    <css.Item>
                        <Icon
                            src={ProductsCartIcon}
                            height={{ md: '80rem', sm: '60rem' }}
                            width={{ md: '80rem', sm: '60rem' }}
                            color={colors.blue}
                            margin={{ md: '0 0 23rem', sm: '0 0 15rem' }}
                        />
                        <css.Title>Products Catalog</css.Title>
                    </css.Item>
                    <css.Item>
                        <Icon
                            src={SupportIcon}
                            height={{ md: '80rem', sm: '60rem' }}
                            width={{ md: '80rem', sm: '60rem' }}
                            color={colors.blue}
                            margin={{ md: '0 0 23rem', sm: '0 0 15rem' }}
                        />
                        <css.Title>24/7 Customer Support</css.Title>
                    </css.Item>
                    <css.Item>
                        <Icon
                            img={IdeaIcon}
                            height={{ md: '80rem', sm: '60rem' }}
                            width={{ md: '80rem', sm: '60rem' }}
                            color={colors.blue}
                            margin={{ md: '0 0 23rem', sm: '0 0 15rem' }}
                        />
                        <css.Title>Product Ideas</css.Title>
                    </css.Item>
                </css.List>
            </Container>
        </css.Section>
    );
}

export default Advantages;