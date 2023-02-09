import {Input} from "components/elements/Input";
import {Button} from "components/elements/Button";
import {colors} from "styles/vars";

import * as css from './SubscribeInput.css';

const SubscribeInput = () => {
    return (
        <css.Wrapper>
            <Input
                placeholder="Your E-mail"
                height={{ md: '57rem', sm: '40rem' }}
                color={colors.gray80}
                backgroundColor={colors.black90}
                padding={{ md: '0 160rem 0 20rem', sm: '0 160rem 0 20rem' }}
                borderRadius="11rem"
            />
            <Button
                title="Subscribe"
                to="#"
                height={{ md: '51rem', sm: '34rem' }}
                width={{ md: '147rem', sm: '120rem' }}
                fontSize={{ sm: '16rem' }}
                borderRadius="8rem"
            />
        </css.Wrapper>
    );
}

export default SubscribeInput;