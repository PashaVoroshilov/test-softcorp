import * as css from './Container.css';

const Container = ({ children, ...props }) => {
    return (
        <css.Root {...props}>
            {children}
        </css.Root>
    );
}

export default Container;
