import * as css from './PageContent.css';

const PageContent = ({ children }) => {
    return (
        <css.Main>
            {children}
        </css.Main>
    );
}

export default PageContent;
