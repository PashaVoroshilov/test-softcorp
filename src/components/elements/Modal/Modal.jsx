import {Icon} from "components/elements/Icon";
import {CloseIcon} from "assets/icons";
import {colors} from "styles/vars";

import * as css from './Modal.css';

const Modal = ({children, onClose}) => {
    return (
        <css.Modal>
            <css.Header>
                <css.Close onClick={onClose}>
                    <Icon src={CloseIcon} color={colors.mainColor} />
                </css.Close>
            </css.Header>
            <css.Wrapper>
                {children}
            </css.Wrapper>
        </css.Modal>
    );
}

export default Modal;