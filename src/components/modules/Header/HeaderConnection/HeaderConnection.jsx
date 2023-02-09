import { HEADER_DATA } from "constans/HEADER_DATA";
import {Link} from "components/elements/Link";
import {colors} from "styles/vars";

import * as css from './HeaderConnection.css';

const HeaderConnection = () => {
    return (
        <css.HeaderConnection>
            <css.List>
                {
                    HEADER_DATA.connectionList.map((item) => (
                        <css.Item as="li" key={item.id}>
                            <Link
                                to="#"
                                title={item.title}
                                fontSize={{ sm: '16rem' }}
                                lineHeight={{ sm: '19rem' }}
                                color={colors.blue}
                            />
                        </css.Item>
                    ))
                }
            </css.List>
        </css.HeaderConnection>
    );
}

export default HeaderConnection;