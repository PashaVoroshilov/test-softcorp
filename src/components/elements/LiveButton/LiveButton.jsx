import {Icon} from "components/elements/Icon";
import {TelegramIcon} from 'assets/icons'
import {BREAKPOINTS, colors} from "styles/vars";
import {useMediaQuery} from "react-responsive";

import * as css from './LiveButton.css';

const LiveButton = () => {
    // eslint-disable-next-line
    const isDesktop = useMediaQuery({
        query: `(min-width: ${BREAKPOINTS.md}px)`
    })
    return (
        <css.Root>
            {isDesktop && <css.Text>Live Chat</css.Text>}
            <Icon
                src={TelegramIcon}
                width={{ md: '28rem', sm: '23rem' }}
                height={{ md: '26rem', sm: '17rem' }}
                color={colors.white100}
            />
        </css.Root>
    );
}

export default LiveButton;