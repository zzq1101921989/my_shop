import React from "react";
import styles from "../category.module.scss";

export default function Header () {
    return (
        <div className={styles.searchWrapper}>
            <div className={styles.searchBox}>
                <div className={styles.iconSearchWrapper}>
                    <svg viewBox="0 0 32 32" className={styles.icon + ' ' + styles.iconSearch}><path fill="#999" fillRule="evenodd" d="M23.624 21.503c3.47-4.51 3.14-11.003-.992-15.135-4.491-4.49-11.773-4.49-16.264 0-4.49 4.491-4.49 11.773 0 16.264 4.132 4.131 10.625 4.462 15.135.992l4.66 4.66a1.5 1.5 0 1 0 2.121-2.121l-4.66-4.66zm-3.114-.993A8.5 8.5 0 1 0 8.49 8.49a8.5 8.5 0 0 0 12.02 12.02z"></path></svg>
                </div>
                <span className={styles.searchPrompt}>输入商品名称</span>
            </div>
        </div>
    )
}