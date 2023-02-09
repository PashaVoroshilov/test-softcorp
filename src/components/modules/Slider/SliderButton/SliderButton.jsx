import {Icon} from "components/elements/Icon";
import {ArrowIcon} from 'assets/icons'

import * as css from './SliderButton.css';

const SliderButton = ({className}) => {
    return (
        <css.Root type="button" className={className}>
            <Icon
                src={ArrowIcon}
                width={{ md: '16rem', sm: '13rem' }}
                height={{ md: '16rem', sm: '13rem' }}
                margin={{ md: '0 5rem 0 0', sm: '0 5rem 0 0' }}
            />
        </css.Root>
    );
}

export default SliderButton;