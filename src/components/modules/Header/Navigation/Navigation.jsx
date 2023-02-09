import { HEADER_DATA } from "constans/HEADER_DATA";
import {Link} from "components/elements/Link";

import * as css from './Navigation.css';

const Navigation = () => {
    return (
        <css.Navigation>
            <css.List>
                {
                    HEADER_DATA.navigationList.map((item) => (
                        <css.Item key={item.id}>
                            <Link
                                to="#"
                                title={item.title}
                                fontSize={{ md: '22rem', sm: '19rem' }}
                                lineHeight={{ md: '27rem', sm: '24rem' }}
                                colorAfter="rgba(155, 149, 145, 0.5)"
                            />
                        </css.Item>
                    ))
                }
            </css.List>
        </css.Navigation>
    );
}

export default Navigation;