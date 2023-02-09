import {Input} from "components/elements/Input";
import {Icon} from "components/elements/Icon";
import { SearchIcon } from 'assets/icons'
import {colors} from "styles/vars";

import * as css from './ProductSearch.css';

const ProductSearch = () => {
    return (
        <css.Root>
            <css.IconWrapper type="button">
                <Icon src={SearchIcon} color={colors.gray90} />
            </css.IconWrapper>
            <Input
                placeholder="Product SKU, Name…"
                height={{ md: '45rem', sm: '40rem' }}
                padding={{ md:'0 10rem 0 53rem', sm: '0 10rem 0 53rem' }}
            />
        </css.Root>
    );
}

export default ProductSearch;