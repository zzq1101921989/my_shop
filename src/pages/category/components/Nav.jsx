import React, { useEffect } from "react"
import styles from "../category.module.scss";
import BScroll from "better-scroll";
import { useRef } from "react";

export default function Nav({ menuData, currentMenu, currentHandler }) {

    let wrapper = useRef(null);

    useEffect(() => {
        window.bs = new BScroll(wrapper.current);
        return () => {
            window.bs = null;
        }
    }, []);

    return (
        <div className={styles.leftWrapper} ref={wrapper} >
            <ul className={styles.wrapper}>
                {
                    menuData?.cate.map((item, index) => {
                        return (
                            <li 
                                key={item.id}
                                className={styles.categoryItem + " " + (currentMenu === index ? styles.selected : '')}
                                onClick={()=> {
                                    currentHandler(index, window.bs);
                                }}
                            >
                                <span className={styles.textWrapper}>{item.name}</span>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}