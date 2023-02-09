import * as css from './Layout.css'

const Layout = ({ children }) => {
    return (
        <css.Layout>
            {children}
        </css.Layout>
    )
}

export default Layout
