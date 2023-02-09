import * as css from './Icon.css'

const Icon = ({ src: Src, img = false, ...props }) => {
    return (
        <css.Root {...props}>
            {
                img ? (
                    <img src={img} alt="" />
                ) : (
                    <Src />
                )
            }
        </css.Root>
    )
}

export default Icon
