import {Container} from "components/elements/Container";
import {FOOTER_DATA} from "constans/FOOTER_DATA"
import {Icon} from "components/elements/Icon";
import {PhoneIcon} from "assets/icons";
import {SubscribeInput} from "components/modules/SubscribeInput";
import Payment from 'assets/images/payment.png'
import {colors} from "styles/vars";
import {Link} from "components/elements/Link";
import useIsDesktop from "Hooks/useIsDesktop";

import * as css from './Footer.css';

const Footer = () => {
    const isDesktop = useIsDesktop();

    return (
        <css.Footer>
            <Container>
                <css.Wrapper>
                    <css.Row>
                        {
                            isDesktop && (
                                <css.Nav>
                                    {
                                        FOOTER_DATA.navigation.map((item) => (
                                            <css.NavItem key={item.id}>
                                                <css.NavTitle>{item.title}</css.NavTitle>
                                                {
                                                    item.list.map((listItem) => (
                                                        <css.NavLink key={listItem.id} as="a" href="#">
                                                            {listItem.title}
                                                        </css.NavLink>
                                                    ))
                                                }
                                                {
                                                    item?.phone && (
                                                        <css.NavLink>
                                                            <Icon
                                                                src={PhoneIcon}
                                                                width={{ md: '18rem', sm: '18rem' }}
                                                                height={{ md: '18rem', sm: '18rem' }}
                                                                color={colors.blue}
                                                                margin={{ sm: '0 7rem 0 0' }}
                                                            />
                                                            <Link
                                                                to="tel:+844434672"
                                                                title="+(844) 434-672"
                                                                color={colors.white100}
                                                                colorAfter="rgba(255, 255, 255, 0.4)"
                                                            />
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
        </css.Footer>
    );
}

export default Footer;