import * as css from './Footer.css';

const Footer = ({ children }) => {
    return (
        <css.Root>
            {children}
        </css.Root>
    );
}

export default Footer;