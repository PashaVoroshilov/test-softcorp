import * as css from './Icon.css'

const Icon = ({ src: Src, ...props }) => {
    return (
        <css.Root {...props}>
            <Src />
        </css.Root>
    )
}

export default Icon
