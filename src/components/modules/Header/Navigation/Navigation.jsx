import { HEADER_DATA } from "constans/HEADER_DATA";

import * as css from './Navigation.css';

const Navigation = () => {
    return (
        <css.Root>
            <css.List>
                {
                    HEADER_DATA.navigationList.map((item, index) => (
                        <css.Item key={index}>
                            <css.Title as="a" href="#">{item.title}</css.Title>
                        </css.Item>
                    ))
                }
            </css.List>
        </css.Root>
    );
}

export default Navigation;