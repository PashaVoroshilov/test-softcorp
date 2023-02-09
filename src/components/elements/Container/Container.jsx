import * as css from './Container.css';

const Container = ({ children, ...props }) => {
    return (
        <css.Container {...props}>
            {children}
        </css.Container>
    );
}

export default Container;
