import * as css from './Link.css';

const Link = ({ title, to, ...props }) => {
    return (
        <css.Link as="a" href={to} {...props}>{title}</css.Link>
    );
}

export default Link;