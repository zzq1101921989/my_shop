import React from "react";
import ProductItem from "./ProductItem";
import styles from "../category.module.scss";

export default function ContextView ({ contextData }) {

    return (
        <div className={styles.contextWrapper + " " + styles.emptyWrapper }>
            {
                contextData?.list.cate.map(item => {
                    return (
                        <div key={item.id} >
                            <div className={styles.categoryTitle}>{item.name}</div>
                            <ProductItem products={item.products} />
                        </div>
                    )
                })
            }
        </div>
    )
}