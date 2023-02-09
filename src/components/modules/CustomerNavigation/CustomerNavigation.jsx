import {Icon} from "components/elements/Icon";
import { ListIcon, UserIcon, LightningIcon, CartIcon } from 'assets/icons'

import * as css from './CustomerNavigation.css';

const CustomerNavigation = () => {
    return (
        <css.Root>
            <css.Item as="a" href="#">
                <css.Icon>
                    <Icon src={ListIcon} />
                </css.Icon>
                <css.Title>Lists</css.Title>
            </css.Item>
            <css.Item as="a" href="#">
                <css.Icon>
                    <Icon src={UserIcon} />
                </css.Icon>
                <css.Title>Account</css.Title>
            </css.Item>
            <css.Item as="a" href="#">
                <css.Icon>
                    <Icon src={LightningIcon} width="18rem" height="27rem" />
                </css.Icon>
                <css.Title>Quick Order</css.Title>
            </css.Item>
            <css.Item as="a" href="#">
                <css.Icon>
                    <Icon src={CartIcon} />
                </css.Icon>
                <css.Title>Cart</css.Title>
            </css.Item>
        </css.Root>
    );
}

export default CustomerNavigation;