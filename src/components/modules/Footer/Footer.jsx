import {Container} from "components/elements/Container";
import {FOOTER_DATA} from "constans/FOOTER_DATA"
import {Icon} from "components/elements/Icon";
import {PhoneIcon} from "assets/icons";
import {SubscribeInput} from "components/modules/SubscribeInput";
import Payment from 'assets/images/payment.png'
import {useMediaQuery} from "react-responsive";
import {BREAKPOINTS} from "styles/vars";

import * as css from './Footer.css';

const Footer = () => {
    // eslint-disable-next-line
    const isDesktop = useMediaQuery({
        query: `(min-width: ${BREAKPOINTS.md}px)`
    })

    return (
        <css.Root>
            <Container>
                <css.Wrapper>
                    <css.Row>
                        {
                            isDesktop && (
                                <css.Nav>
                                    {
                                        FOOTER_DATA.navigation.map((item, index) => (
                                            <css.NavItem key={index}>
                                                <css.NavTitle>{item.title}</css.NavTitle>
                                                {
                                                    item.list.map((listItem, index) => (
                                                        <css.NavLink key={index} as="a" href="#">
                                                            {listItem.title}
                                                        </css.NavLink>
                                                    ))
                                                }
                                                {
                                                    item?.phone && (
                                                        <css.NavLink>
                                                            <css.NavLinkIcon>
                                                                <Icon
                                                                    src={PhoneIcon}
                                                                    width={{ md: '18rem', sm: '18rem' }}
                                                                    height={{ md: '18rem', sm: '18rem' }}
                                                                />
                                                            </css.NavLinkIcon>
                                                            <css.NavLinkText as="a" href="tel:+844434672">+(844) 434-672</css.NavLinkText>
                                                        </css.NavLink>
                                                    )
                                                }
                                            </css.NavItem>
                                        ))
                                    }
                                </css.Nav>
                            )
                        }
                        <css.Content>
                            <css.SubscribeText>{FOOTER_DATA.subscribeText}</css.SubscribeText>
                            <SubscribeInput />
                            <Icon
                                img={Payment}
                                width={{ md: '81rem', sm: '60rem' }}
                                height={{ md: 'auto', sm: 'auto' }}
                                margin={{ md: '47rem 0 0', sm: '30rem 0 0' }}
                            />
                        </css.Content>
                    </css.Row>
                    <css.CopyRight>{FOOTER_DATA.copyRightText}</css.CopyRight>
                </css.Wrapper>
            </Container>
        </css.Root>
    );
}

export default Footer;