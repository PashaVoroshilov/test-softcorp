import * as css from './Icon.css'

const Icon = ({ src: Src, img = false, ...props }) => {
    return (
        <css.Icon {...props}>
            {
                img ? (
                    <img src={img} alt="" />
                ) : (
                    <Src />
                )
            }
        </css.Icon>
    )
}

export default Icon
