import React from "react";
import styles from "./Header.module.scss";
import Logo from "../../common/icons/logo";
import { useState } from "react";

function Header(props) {
    const { children } = props;
    const [active, setActive] = useState(1);
    const menu = [
        {
            id: 1,
            title: "Trang chủ",
            router: "/",
        },
        {
            id: 2,
            title: "GIỚI THIỆU",
            router: "",
        },
        {
            id: 3,
            title: "Sản phẩm",
            router: "",
        },
        {
            id: 4,
            title: "Chính sách",
            router: "",
        },
        {
            id: 5,
            title: "Mua hàng",
            router: "",
        },
    ];
    return (
        <>
            <div className={styles.headerBox}>
                <div className={styles.logo}>
                    <Logo />
                </div>
                <div className={styles.menu}>
                    {menu?.map((item, idx) => {
                        return (
                            <div className={styles.menuItem} key={idx}>
                                <div className={styles.title}>{item?.title}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className={styles.children}>{children}</div>
        </>
    );
}

export default Header;
