import HeaderMobile from "./HeaderMobile";
import HeaderDesktop from "./HeaderDesktop";
import {BREAKPOINTS} from "styles/vars";
import {useMediaQuery} from "react-responsive";

const Header = () => {
    // eslint-disable-next-line
    const isDesktop = useMediaQuery({
        query: `(min-width: ${BREAKPOINTS.md}px)`
    })

    return (
        isDesktop ? <HeaderDesktop /> : <HeaderMobile />
    );
}

export default Header;