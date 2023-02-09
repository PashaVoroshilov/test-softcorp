import * as css from './Input.css';

const Input = ({ placeholder, ...props }) => {
    return (
        <css.Input as="input" placeholder={placeholder} type="text" {...props} />
    );
}

export default Input;