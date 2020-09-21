import React from "react";
import FlashItem from "./FlashSaleItem";
import PubSub from "pubsub-js";
import styles from "../home.module.scss";

export default function FlashSale ({flashData}) {

    function addGoodsToCart (goods) {
        // 发布消息，触发 Home组件上的方法
        PubSub.publish("addGoodsToCart", goods);
    }

    return (
        <div className={styles.flashWrapper}>
            <div className={styles.flashTitleWrapper}>
                <div className={styles.flashTitle}>限时抢购</div>
                <span className={styles.actionStateText}>07:00场</span>
                <div className={styles.actionStateTextEnd}>已结束</div>
                <span className={styles.more}>更多</span>
            </div>
            <div className={styles.flashItemsWrapper}>
                {
                    flashData.map(item => {
                        return <FlashItem 
                            key={item.id} 
                            {...item} 
                            addGoodsToCart={addGoodsToCart} 
                        />
                    })
                }
            </div>
        </div>
    )
}