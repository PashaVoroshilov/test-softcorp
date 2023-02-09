import { HeaderConnection } from "components/modules/Header/HeaderConnection";
import {Container} from "components/elements/Container";
import {Navigation} from "./Navigation";
import {Icon} from "components/elements/Icon";
import {colors} from "styles/vars";
import {PhoneIcon} from "assets/icons";
import {ProductSearch} from "components/modules/ProductSearch";
import LogoIcon from "assets/icons/logo.svg";
import {CustomerNavigation} from "components/modules/CustomerNavigation";
import {Link} from "components/elements/Link";

import * as css from './Header.css';

const HeaderDesktop = () => {

    return (
        <css.Header as="header">
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
                        <Icon
                            src={PhoneIcon}
                            color={colors.blue}
                            width={{ md: '25rem', sm: '25rem' }}
                            height={{ md: '25rem', sm: '25rem' }}
                        />
                        <Link
                            to="tel:+844434672"
                            title="+(844) 434-672"
                            fontSize={{ md: '22rem', sm: '18rem' }}
                            lineHeight={{ md: '27rem', sm: '24rem' }}
                            color={colors.blue}
                        />
                    </css.Phone>
                </css.Bottom>
            </Container>
        </css.Header>
    );
}

export default HeaderDesktop;