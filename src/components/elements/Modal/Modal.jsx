import {Icon} from "components/elements/Icon";
import {CloseIcon} from "assets/icons";

import * as css from './Modal.css';

const Modal = ({children, onClose}) => {
    return (
        <css.Root>
            <css.Header>
                <css.Close onClick={onClose}>
                    <Icon src={CloseIcon} />
                </css.Close>
            </css.Header>
            <css.Wrapper>
                {children}
            </css.Wrapper>
        </css.Root>
    );
}

export default Modal;