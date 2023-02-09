import * as css from './Container.css';

const Container = ({ children }) => {
    return (
        <css.Root>
            {children}
        </css.Root>
    );
}

export default Container;
