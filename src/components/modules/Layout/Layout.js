import * as css from './Layout.css'

const Layout = ({ children }) => {
    return (
        <css.Root>
            {children}
        </css.Root>
    )
}

export default Layout
