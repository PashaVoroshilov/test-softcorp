import * as css from './PageContent.css';

const PageContent = ({ children }) => {
    return (
        <css.Root>
            {children}
        </css.Root>
    );
}

export default PageContent;
