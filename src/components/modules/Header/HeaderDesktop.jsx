import { HeaderConnection } from "components/modules/Header/HeaderConnection";
import {Container} from "components/elements/Container";
import {Navigation} from "./Navigation";
import {Icon} from "components/elements/Icon";
import {colors} from "styles/vars";
import {PhoneIcon} from "assets/icons";
import {ProductSearch} from "components/modules/ProductSearch";
import LogoIcon from "assets/icons/logo.svg";
import {CustomerNavigation} from "components/modules/CustomerNavigation";

import * as css from './Header.css';

const HeaderDesktop = () => {

    return (
        <css.Root as="header">
            <Container>
                <HeaderConnection />
                <css.Flex>
                    <css.Logo src={LogoIcon} />
                    <ProductSearch />
                    <CustomerNavigation />
                </css.Flex>
                <css.Bottom>
                    <Navigation />
                    <css.Phone>
                        <Icon src={PhoneIcon} width="25rem" height="25rem" color={colors.blue} />
                        <css.PhoneText as="a" href="tel:+844434672">+(844) 434-672</css.PhoneText>
                    </css.Phone>
                </css.Bottom>
            </Container>
        </css.Root>
    );
}

export default HeaderDesktop;