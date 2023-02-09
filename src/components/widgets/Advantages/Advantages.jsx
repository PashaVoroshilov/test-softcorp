import {Container} from "components/elements/Container";
import {Icon} from "components/elements/Icon";
import {ProductsCartIcon, SupportIcon} from 'assets/icons'
import IdeaIcon from 'assets/icons/idea.png'

import * as css from './Advantages.css';

const Advantages = () => {
    return (
        <css.Root>
            <Container maxWidth="1080rem">
                <css.List>
                    <css.Item>
                        <css.IconWrapper>
                            <Icon
                                src={ProductsCartIcon}
                                height={{ md: '100%', sm: '100%' }}
                                width={{ md: '100%', sm: '100%' }}
                            />
                        </css.IconWrapper>
                        <css.Title>Products Catalog</css.Title>
                    </css.Item>
                    <css.Item>
                        <css.IconWrapper>
                            <Icon
                                src={SupportIcon}
                                height={{ md: '100%', sm: '100%' }}
                                width={{ md: '100%', sm: '100%' }}
                            />
                        </css.IconWrapper>
                        <css.Title>24/7 Customer Support</css.Title>
                    </css.Item>
                    <css.Item>
                        <css.IconWrapper>
                            <Icon
                                img={IdeaIcon}
                                height={{ md: '100%', sm: '100%' }}
                                width={{ md: '100%', sm: '100%' }}
                            />
                        </css.IconWrapper>
                        <css.Title>Product Ideas</css.Title>
                    </css.Item>
                </css.List>
            </Container>
        </css.Root>
    );
}

export default Advantages;