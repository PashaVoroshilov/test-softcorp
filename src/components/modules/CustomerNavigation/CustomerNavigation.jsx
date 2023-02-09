import {Icon} from "components/elements/Icon";
import { ListIcon, UserIcon, LightningIcon, CartIcon } from 'assets/icons'
import {useMediaQuery} from "react-responsive";
import {BREAKPOINTS} from "styles/vars";

import * as css from './CustomerNavigation.css';

const CustomerNavigation = () => {
    // eslint-disable-next-line
    const isDesktop = useMediaQuery({
        query: `(min-width: ${BREAKPOINTS.md}px)`
    })

    return (
        <css.Wrapper>
            <css.Item as="a" href="#">
                <Icon
                    src={ListIcon}
                    margin={{ sm: '0 9rem 0 0' }}
                />
                {isDesktop && <css.Title>Lists</css.Title>}
            </css.Item>
            <css.Item as="a" href="#">
                <Icon
                    src={UserIcon}
                    margin={{ sm: '0 9rem 0 0' }}
                />
                {isDesktop && <css.Title>Account</css.Title>}
            </css.Item>
            <css.Item as="a" href="#">
                <Icon
                    src={LightningIcon}
                    width={{ md: '18rem', sm: '18rem' }}
                    height={{ md: '27rem', sm: '27rem' }}
                    margin={{ sm: '0 9rem 0 0' }}
                />
                {isDesktop && <css.Title>Quick Order</css.Title>}
            </css.Item>
            <css.Item as="a" href="#">
                <Icon
                    src={CartIcon}
                    margin={{ sm: '0 9rem 0 0' }}
                />
                {isDesktop && <css.Title>Cart</css.Title>}
            </css.Item>
        </css.Wrapper>
    );
}

export default CustomerNavigation;