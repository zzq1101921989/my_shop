import React from "react"
import styl from "../home.module.scss";

export default function Header() {
    return (
        <div className={styl.wrapper}>
            <div className={styl.locationWrapper}>
                <svg viewBox="0 0 32 32" className={styl.icon + " " + styl.iconLocation}>
                    <path fill="#81838E" fillRule="evenodd"
                        d="M14.521 30.445c.817.738 2.142.75 2.958 0 0 0 11.521-9.82 11.521-17.158C29 5.95 23.18 0 16 0S3 5.949 3 13.287c0 7.339 11.521 17.158 11.521 17.158zM16 18a5 5 0 1 0 0-10 5 5 0 0 0 0 10z"></path>
                </svg>
                <span className={styl.address}>广州市</span>
                <svg viewBox="0 0 32 32" className={styl.icon + " " + styl.iconArrow}>
                    <path fill="#81838E" fillRule="evenodd"
                        d="M14.724 19.17c.783.784 2.05.788 2.837 0l5.047-5.047c1.173-1.172.776-2.123-.869-2.123H10.545c-1.652 0-2.04.952-.869 2.123l5.048 5.048z"></path>
                </svg>
            </div>
            <div className={styl.searchWrapper}>
                <div className={styl.searchContent}>
                    <div className={styl.iconSearchWrapper}>
                        <svg viewBox="0 0 32 32" className={styl.icon + " " + styl.iconSearch}>
                            <path fill="#999" fillRule="evenodd"
                                d="M23.624 21.503c3.47-4.51 3.14-11.003-.992-15.135-4.491-4.49-11.773-4.49-16.264 0-4.49 4.491-4.49 11.773 0 16.264 4.132 4.131 10.625 4.462 15.135.992l4.66 4.66a1.5 1.5 0 1 0 2.121-2.121l-4.66-4.66zm-3.114-.993A8.5 8.5 0 1 0 8.49 8.49a8.5 8.5 0 0 0 12.02 12.02z"></path>
                        </svg>
                    </div>
                    <span className={styl.searchPrompt}>输入商品名称</span>
                </div>
            </div>
        </div>
    )
}