import * as css from './Button.css';

const Button = ({ children, title, to, ...props }) => {
    return (
        <css.Button as="a" href={to} type="button" {...props}>
            {
                children ?? title
            }
        </css.Button>
    );
}

export default Button;