import * as css from './Button.css';

const Button = ({ children, title, to, ...props }) => {
    return (
        <css.Root as="a" href={to} type="button" {...props}>
            {
                children ?? title
            }
        </css.Root>
    );
}

export default Button;