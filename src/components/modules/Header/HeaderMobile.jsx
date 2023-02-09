import {Icon} from "components/elements/Icon";
import {BurgerIcon, PhoneIcon, SearchIcon} from "assets/icons";
import LogoIcon from "assets/icons/logo.svg";
import {Modal} from "components/elements/Modal";
import {useState} from "react";
import {Navigation} from "components/modules/Header/Navigation";
import {CustomerNavigation} from "components/modules/CustomerNavigation";
import {ProductSearch} from "components/modules/ProductSearch";
import {colors} from "styles/vars";

import * as css from './Header.css';

const HeaderDesktop = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const [openSearch, setOpenSearch] = useState(false)

    return (
        <css.Root as="header">
            <css.Burger type="button" onClick={() => setOpenMenu((prev) => !prev)}>
                <Icon src={BurgerIcon} />
            </css.Burger>
            <css.Logo src={LogoIcon} />
            <css.SearchTrigger type="button" onClick={() => setOpenSearch((prev) => !prev)}>
                <Icon src={SearchIcon} />
            </css.SearchTrigger>
            {
                openMenu && (
                    <Modal onClose={() => setOpenMenu((prev) => !prev)}>
                        <Navigation />
                        <CustomerNavigation />
                        <css.Phone>
                            <Icon src={PhoneIcon} width="25rem" height="25rem" color={colors.blue} />
                            <css.PhoneText as="a" href="tel:+844434672">+(844) 434-672</css.PhoneText>
                        </css.Phone>
                    </Modal>
                )
            }
            {
                openSearch && (
                    <Modal onClose={() => setOpenSearch((prev) => !prev)}>
                        <ProductSearch />
                    </Modal>
                )
            }
        </css.Root>
    );
}

export default HeaderDesktop;