import { HEADER_DATA } from "constans/HEADER_DATA";

import * as css from './HeaderConnection.css';

const HeaderConnection = () => {
    return (
        <css.Root>
            <css.List>
                {
                    HEADER_DATA.connectionList.map((item, index) => (
                        <css.Item as="li" key={index}>
                            <css.Link as="a" href="#">
                                {item.title}
                            </css.Link>
                        </css.Item>
                    ))
                }
            </css.List>
        </css.Root>
    );
}

export default HeaderConnection;