import HeaderMobile from "./HeaderMobile";
import HeaderDesktop from "./HeaderDesktop";
import useIsDesktop from "Hooks/useIsDesktop";

const Header = () => {
    const isDesktop = useIsDesktop();

    return (
        isDesktop ? <HeaderDesktop /> : <HeaderMobile />
    );
}

export default Header;