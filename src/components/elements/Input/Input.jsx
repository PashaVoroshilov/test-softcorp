import * as css from './Input.css';

const Input = ({ placeholder, ...props }) => {
    return (
        <css.Root as="input" placeholder={placeholder} type="text" {...props} />
    );
}

export default Input;