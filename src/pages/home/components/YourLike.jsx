import React from "react";
import styles from "../home.module.scss";
import YourLikeItem from "./YourLikeItem";
import PubSub from 'pubsub-js';

export default function YourLike ({articleData}) {

    function addGoodsToCart (goods) {
        // 发布消息，触发 Home组件上的方法
        PubSub.publish("addGoodsToCart", goods);
    }

    return (
        <div className={styles.yourLikeWrapper}>
            <div className={styles.yourLikeTitleWrapper}>
                <div className={styles.middleLine}></div>
                <div className={styles.yourLikeTitle}>猜你喜欢</div>
            </div>
            <YourLikeItem articleData={articleData} addGoodsHandle={addGoodsToCart} />
        </div>
    )
}