import React from "react";
import { Toast } from "antd-mobile";

export default function Footer({ styles, allSelectState, selectAllGoods, currentGoodsLength, addMoney, history }) {

    // 点击跳转订单详情
    function toMyOrderHandler () {
        if (currentGoodsLength > 0) {
            history.push("/order");
        } else {
            Toast.info("请选择需要结算的商品哦", 1)
        }
    }

    return (
        <div className={styles.tabBar}>
            <div className={styles.tabBarLeft}>
                <span 
                    className={styles.cartCheckBox + " " + (allSelectState ? styles.checked : '')}
                    onClick={selectAllGoods}
                ></span>
                <span style={{
                    fontSize: '16px'
                }}>全选</span>
                <div className={styles.selectAll}>
                    合计：<span className={styles.totalPrice}>{addMoney}</span>
                </div>
            </div>
            <div 
                className={styles.tabBarRight}
                onClick={toMyOrderHandler}
            >
                <span className={styles.pay}>{`去结算(${currentGoodsLength})`}</span>
            </div>
        </div>
    )
}