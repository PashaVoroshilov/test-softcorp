import {Icon} from "components/elements/Icon";
import {TelegramIcon} from 'assets/icons'
import {colors} from "styles/vars";
import useIsDesktop from "Hooks/useIsDesktop";

import * as css from './LiveButton.css';

const LiveButton = () => {
    const isDesktop = useIsDesktop();

    return (
        <css.Button>
            {isDesktop && <css.Text>Live Chat</css.Text>}
            <Icon
                src={TelegramIcon}
                width={{ md: '28rem', sm: '23rem' }}
                height={{ md: '26rem', sm: '17rem' }}
                color={colors.white100}
            />
        </css.Button>
    );
}

export default LiveButton;