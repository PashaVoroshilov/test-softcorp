import {Icon} from "components/elements/Icon";
import {BurgerIcon, PhoneIcon, SearchIcon} from "assets/icons";
import LogoIcon from "assets/icons/logo.svg";
import {Modal} from "components/elements/Modal";
import {useState} from "react";
import {Navigation} from "components/modules/Header/Navigation";
import {CustomerNavigation} from "components/modules/CustomerNavigation";
import {ProductSearch} from "components/modules/ProductSearch";
import {colors} from "styles/vars";
import {Link} from "components/elements/Link";

import * as css from './Header.css';

const HeaderDesktop = () => {
    const [isMenuOpen, setOpenMenu] = useState(false)
    const [isSearchOpen, setOpenSearch] = useState(false)

    return (
        <css.Header as="header">
            <css.Burger type="button" onClick={() => setOpenMenu((prev) => !prev)}>
                <Icon src={BurgerIcon} color={colors.black} />
            </css.Burger>
            <css.Logo src={LogoIcon} />
            <css.SearchTrigger type="button" onClick={() => setOpenSearch((prev) => !prev)}>
                <Icon src={SearchIcon} color={colors.black} />
            </css.SearchTrigger>
            {
                isMenuOpen && (
                    <Modal onClose={() => setOpenMenu((prev) => !prev)}>
                        <Navigation />
                        <CustomerNavigation />
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
                    </Modal>
                )
            }
            {
                isSearchOpen && (
                    <Modal onClose={() => setOpenSearch((prev) => !prev)}>
                        <ProductSearch />
                    </Modal>
                )
            }
        </css.Header>
    );
}

export default HeaderDesktop;